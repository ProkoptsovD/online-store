import { PureComponent } from "react";
import PropTypes from 'prop-types';
import { InnerWrapper, OuterWrapper, AddToCartButton, DescriptionWrapper } from './ProductCard.styled';
import Gallery from "../Gallery/";
import ProductInfo from "./ProductInfo/";
import OptionPicker from "../OptionPicker";
import Description from "./Description";

class ProductCard extends PureComponent {
    static defaultProps = {
        product: {
            id: '',
            brand: '',
            gallery: [],
            description: '',
            prices: [],
            attributes: [],
        }
    };
    state = {
        selectedOptions: {},
    }
    renderOptionPickers = () => {
        const { product: { attributes, inStock }, disabled, optionPickerType } = this.props;
        const { selectedOptions } = this.state;

        return attributes.map(attr => (
            <OptionPicker
                key={attr.name}
                id={attr.id}
                option={attr}
                selected={selectedOptions[attr.name]?.id}
                disabled={inStock ? disabled : !inStock}
                onClick={this.selectOption}
                optionPickerType={optionPickerType}
            />
        ));
    };
    selectOption = (e) => {
        const BUTTON_KEY = 'BUTTON';

        const isButtonClicked = e.target.nodeName === BUTTON_KEY;
        const option = e.currentTarget.id;
        const { value, id } = e.target;

        if (!isButtonClicked) return;

        this.setState(prevState => ({
            ...prevState,
            selectedOptions: {
                ...prevState.selectedOptions,
                [option]: {
                    id: Number(id),
                    value,
                },
            },
        }));
    };
    ckeckOptionSelection = () => {
        const { attributes } = this.props.product;
        const allOptionNumber = attributes.length;
        const selectedOptionNumber = Object.keys(this.state.selectedOptions).length;
       
        return allOptionNumber === selectedOptionNumber;
    }
    addToCart = () => {
        const { product, addToCart, updateTotalPrice, addToast } = this.props;
        const { selectedOptions } = this.state;
        const isEveryOptionSelected = this.ckeckOptionSelection();

        if (!isEveryOptionSelected) {
            addToast('warning', 'selectWarning');
            return;
        }
        addToCart(product, selectedOptions);
        addToast('success', 'addSuccess');
        updateTotalPrice();
    }
    render() {
        const { product: { brand, name, gallery, description, inStock, prices }, currency, galleryType } = this.props;
        const price = prices[currency];

        return (
            <OuterWrapper>
                <Gallery
                    galleryType={galleryType}
                    imageList={gallery}/>
                <InnerWrapper instock={inStock}>
                    <ProductInfo
                        brandName={brand}
                        productName={name}
                        price={price}
                    >
                    {this.renderOptionPickers()}
                    </ProductInfo>
                    <AddToCartButton
                        onClick={this.addToCart}
                        disabled={!inStock}
                    >
                        Add to cart
                    </AddToCartButton>
                    {
                        description &&  <DescriptionWrapper>
                                            <Description
                                                descr={description}
                                            />
                                        </DescriptionWrapper>
                    }
                </InnerWrapper>
            </OuterWrapper>
        );
    };
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        prices: PropTypes.arrayOf(PropTypes.object).isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object),
    })
}

export default ProductCard;