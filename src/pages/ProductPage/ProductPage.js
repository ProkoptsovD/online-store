import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "../../hoc/withRouter";
import { getProductByIdThunk } from "../../redux/thunks/getProductByIdThunk";
import Section from "../../components/common/Section";
import ProductCard from "../../components/ProductCard/";
import { addItemToCart, addNotification, clearProductPage, sumTotalPrice } from "../../redux/actions/actions";

class ProductPage extends Component {
    componentDidMount() {
        const { getProduct, router: { params : { id } } } = this.props;
        getProduct(id);
    };
    componentWillUnmount() {
        const { clearPage } = this.props;
        clearPage();
    };
    render() {
        const { product, currency, disabled, addToCart, updateTotalPrice, addToast } = this.props;

        return (
            <Section>
                {
                    product && <ProductCard
                                product={product}
                                disabled={disabled}
                                currency={currency}
                                addToCart={addToCart}
                                updateTotalPrice={updateTotalPrice}
                                addToast={addToast}
                                optionPickerType="default"
                                galleryType="default"
                    />
                }
            </Section>
        )
    };
}

const mapStateToProps = (state) => ({
    product: state.productPage.product,
    disabled: state.cart.disableOptionsButtons.productCard,
    currency: state.currency.actualCurrency.index,
});
const mapDispatchToProps = (dispatch) => ({
    getProduct: (id) => {
        dispatch(getProductByIdThunk(id));
    },
    clearPage: () => {
        dispatch(clearProductPage());
    },
    addToCart: (item, option) => {
        dispatch(addItemToCart(item, option));
    },
    updateTotalPrice: () => {
        dispatch(sumTotalPrice());
    },
    addToast: (type, message) => {
        dispatch(addNotification(type, message));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));