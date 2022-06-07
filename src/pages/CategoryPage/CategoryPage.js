import React from "react";
import Section from "../../components/common/Section/";
import PropTypes from 'prop-types';
import FlexGrid from "../../components/common/FlexGrid/";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { CategoryName } from "./CategoryPage.styled";
import { connect } from "react-redux";
import { setProductsToPageThunk } from "../../redux/thunks/setProductToPageThunk";
import { addItemToCart, sumTotalPrice } from "../../redux/actions/actions";
import { withRouter } from '../../hoc/withRouter';


class CategoryPage extends React.Component {
    static defaultProps = {
        name: 'Category name',
    }
    addProduct = (e) => {
        e.preventDefault();
        
        const { addProductToCart, sumTotalPriceInCart, productList } = this.props;
        const productId = e.currentTarget.value;
        const product = productList.find(({id}) => id === productId);

        addProductToCart(product);
        sumTotalPriceInCart();
    }
    cancelRequest = () => {
        const controller = new AbortController();
        const signal = controller.signal;

        controller.abort();
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
    componentDidMount() {
        const { categoryName, renderProductList } = this.props;

        renderProductList(categoryName);
    }
    componentWillUnmount() {
        this.cancelRequest();
    }
    render() {
        const { productList, categoryName } = this.props;

        return (
            <Section>
                <CategoryName>
                    {categoryName}
                </CategoryName>
                <FlexGrid>
                    {this.renderProductList(productList)}
                </FlexGrid>
            </Section>
        )
    }
};

CategoryPage.propTypes = {
    categoryName: PropTypes.string.isRequired,
    productList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    productList: state.category.products,
    currency: state.currency.actualCurrency.index,
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPage));