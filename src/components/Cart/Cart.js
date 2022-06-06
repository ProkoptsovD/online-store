import { Component } from "react";
import PropTypes from 'prop-types';
import OrederDetails from "./OrederDetails";
import Product from '../Cart/Product';
import { connect } from "react-redux";
import {
    CheckOutButton, ViewBagButton, OuterWrapper,
    CartNameWrapper, CartName, TotalNumberOfItems,
    ItemWord, TotalPriceWrapper, Total, Price,
    NothingAdded, ProductList, ListItem, OrderButton
} from "./Cart.styled";
import { closeOverlay, decreaseItemsQuantaty, increaseItemsQuantaty, sumTotalPrice } from "../../redux/actions/actions";

class Cart extends Component {
    static defaultProps = {
        itemsTotal: 0,
    };
    cartType = {
        mini: 'mini',
        default: 'default',
    };
    renderCartHeader = () => {
        const { itemsTotal } = this.props;
        return (
                <CartNameWrapper>
                    <CartName>
                        My bag.&nbsp;
                    </CartName>
                    <TotalNumberOfItems>
                        {itemsTotal}&nbsp;
                    </TotalNumberOfItems>
                    <ItemWord>
                        {itemsTotal === 1 ? 'item' : 'items'}
                    </ItemWord>
                </CartNameWrapper>
        );
    };
    renderCartFooter = () => {
        const { itemsTotal, priceTotal } = this.props;

        return !itemsTotal ? null : <TotalPriceWrapper>
                                        <Total>
                                            Total
                                        </Total>
                                        <Price>
                                            {priceTotal.symbol + priceTotal.total}
                                        </Price>
                                    </TotalPriceWrapper>
    };
    renderControls = () => {
        const { itemsTotal, priceTotal: { total, symbol }, tax, cartType, closeOverlay } = this.props;

        if (!itemsTotal) return null;

        switch (cartType) {
            case this.cartType.mini: 
                return  <>
                            <ViewBagButton to="/cart" onClick={closeOverlay}>
                                View bag
                            </ViewBagButton>
                            <CheckOutButton to={`/cart/order`} onClick={closeOverlay}>
                                Check Out
                            </CheckOutButton>
                        </>
            case this.cartType.default:
                return  <>
                            <OrederDetails values={{
                                    quantaty: itemsTotal,
                                    tax: symbol + tax,
                                    total: symbol + total,
                                }}
                            />
                            <OrderButton to='/cart/order'>
                                Order
                            </OrderButton>
                        </>
            default:
                throw new Error('Cart type must be passed to Cart props');
        };     
    };
    increaseQuantaty = (id) => {
        const { increase, updateTotalPrice } = this.props;
        increase(id);
        updateTotalPrice();
    };
    decreaseQuantaty = (id) => {
        const { decrease, updateTotalPrice } = this.props;
        decrease(id);
        updateTotalPrice();
    }
    renderAddedProducts = () => {
        const { addedProducts, disabled , currency, cartType, galleryType, optionPickerType, quantatyPanelType, productCardType } = this.props;

        return addedProducts.map(({ product, selectedOptions, quantaty, cartId }) => {
            const increaseQuantatyBinded = this.increaseQuantaty.bind(this, cartId);
            const decreaseQuantatyBinded = this.decreaseQuantaty.bind(this, cartId);
            
            return (
                <ListItem
                    key={cartId}
                    cartType={cartType}
                >
                    <Product 
                        product={product}
                        disabled={disabled}
                        selectedOptions={selectedOptions}
                        galleryType={galleryType}
                        optionPickerType={optionPickerType}
                        quantatyPanelType={quantatyPanelType}
                        productCardType={productCardType}
                        quantaty={quantaty}
                        currency={currency}
                        increaseQuantaty={increaseQuantatyBinded}
                        decreaseQuantaty={decreaseQuantatyBinded}
                    />
                </ListItem>
            )
        });
    };
    render() {
        const { itemsTotal, cartType } = this.props;

        return (
            <>
                <OuterWrapper>
                    { this.cartType.mini === cartType && this.renderCartHeader() }
                    <ProductList>
                        { this.renderAddedProducts() }
                    </ProductList>
                    { this.cartType.mini === cartType && this.renderCartFooter() }
                    { itemsTotal ? null :   <NothingAdded>
                                                Nothing have been add yet
                                            </NothingAdded>}
                </OuterWrapper>
                { this.renderControls() }
            </>
        );
    }
}

Cart.propTypes = {
    children: PropTypes.node,
    itemsTotal: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    itemsTotal: state.cart.itemsTotal,
    addedProducts: state.cart.items,
    disabled: state.cart.disableOptionsButtons.miniCart,
    currency: state.currency.actualCurrency.index,
    priceTotal: state.cart.priceTotal,
    tax: state.cart.tax,
});
const mapDispatchToProps = (dispatch) => ({
    increase: (id) => {
        dispatch(increaseItemsQuantaty(id));
    },
    decrease: (id) => {
        dispatch(decreaseItemsQuantaty(id));
    },
    updateTotalPrice: () => {
        dispatch(sumTotalPrice());
    },
    closeOverlay: () => {
        dispatch(closeOverlay());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);