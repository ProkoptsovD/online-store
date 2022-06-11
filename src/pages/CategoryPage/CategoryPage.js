import { Component } from "react";
import Section from "../../components/common/Section/";
import PropTypes from 'prop-types';
import FlexGrid from "../../components/common/FlexGrid/";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import storage from '../../services/storage-api';
import { CategoryName } from "./CategoryPage.styled";
import { connect } from "react-redux";
import { setProductsToPageThunk } from "../../redux/thunks/setProductToPageThunk";
import { addItemToCart, sumTotalPrice } from "../../redux/actions/actions";
import { withRouter } from '../../hoc/withRouter';

class CategoryPage extends Component {
    componentDidMount() {
        const { renderProductList } = this.props;
        const categoryName = this.props.router.location.pathname.slice(1).toLowerCase();

        renderProductList(categoryName);
    }
    componentDidUpdate () {
        const { cart } = this.props;
        const { renderProductList, categoryList } = this.props;
        const categoryName = this.props.router.location.pathname.slice(1).toLowerCase();

        if (!categoryList[categoryName]) {
            renderProductList(categoryName);
        }
        
        if (cart.items || cart.items.length) {
            storage.save('cart', cart);
        }
    }
    getCategoryProductList = () => {
        const categoryName = this.props.router.location.pathname.slice(1).toLowerCase();
        
        return {
            name: categoryName,
            productList: this.props.categoryList[categoryName] ?? [],
        };
    }
    addProduct = (e) => {
        e.preventDefault();
        
        const { addProductToCart, sumTotalPriceInCart } = this.props;
        const { productList } = this.getCategoryProductList();

        const productId = e.currentTarget.value;
        const product = productList.find(({id}) => id === productId);

        addProductToCart(product);
        sumTotalPriceInCart();
    }
    renderProductList = (productList) => {
        const { currency } = this.props;

        return productList.map((product, idx) => (
            <PreviewCard 
                key={idx}
                product={product} 
                currency={currency}
                addProduct={this.addProduct}
                />
        ));
    }
    render() {
        const { name, productList } = this.getCategoryProductList();

        return (
            <Section>
                <CategoryName>
                    {name}
                </CategoryName>
                <FlexGrid>
                    {this.renderProductList(productList)}
                </FlexGrid>
            </Section>
        )
    }
};

CategoryPage.propTypes = {
    productList: PropTypes.object,
};

const mapStateToProps = (state) => ({
    categoryList: state.category,
    currency: state.currency.actualCurrency.index,
    cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
    renderProductList: (categoryName) => {
        dispatch(setProductsToPageThunk(categoryName));
    },
    addProductToCart: (product) => {
        dispatch(addItemToCart(product));
    },
    sumTotalPriceInCart: () => {
        dispatch(sumTotalPrice());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPage));