import { Component } from 'react';
import PropTypes from 'prop-types';
import { BrandName, InnerWrapper, OuterWrapper, Price, ProductName } from './Product.styled';
import OptionPicker from '../../OptionPicker';
import Gallery from '../../Gallery';
import QuantatyPanel from '../QuantatyPanel';

class Product extends Component {
    static defaultProps = {
        product: {
            id: '1',
            brand: 'brand',
            product: 'product',
            prices: [
                {
                    amount: '17',
                    currency: {
                        symbol: '$',
                        label: 'USD',
                    }
                }
            ],
            attributes: [],
            gallery: [],
        },
        currency: 0,
    };
    renderOptionPickerList = () => {
        const { product: { attributes }, selectedOptions, disabled, optionPickerType } = this.props;

        return attributes.map(attr => {
            const pickedOption = selectedOptions[attr.id]?.id;
            
            return (
                <OptionPicker
                            key={attr.id}
                            option={attr}
                            selected={pickedOption}
                            disabled={disabled}
                            optionName={this.props.optionName}
                            optionButton={this.props.optionButton}
                            optionPickerType={optionPickerType}       
                />
            )
        });
    }
    render() {
        const {
            product: { brand, name, prices, gallery },
            quantaty, currency, galleryType, increaseQuantaty,
            decreaseQuantaty, quantatyPanelType
        } = this.props;

        const price = prices[currency];
        
        return (
            <OuterWrapper>
                <InnerWrapper {...this.props}>
                    <BrandName {...this.props}>
                        {brand}
                    </BrandName>
                    <ProductName {...this.props}>
                        {name}
                    </ProductName>
                    <Price {...this.props}>
                        {price.currency.symbol + price.amount}
                    </Price>
                    {this.renderOptionPickerList()}
                </InnerWrapper>
                <QuantatyPanel
                    vertical
                    quantatyPanelType={quantatyPanelType}
                    quantaty={quantaty}
                    increaseQuantaty={increaseQuantaty}
                    decreaseQuantaty={decreaseQuantaty}
                />
                <Gallery
                    galleryType={galleryType}
                    imageList={gallery}
                />
            </OuterWrapper>
        );
    };
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        prices: PropTypes.arrayOf(PropTypes.object),
        attributes: PropTypes.arrayOf(PropTypes.object),
        gallery: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    currency: PropTypes.number,
};

export default Product;