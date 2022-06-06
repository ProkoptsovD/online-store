import {Component} from 'react';
import PropTypes from 'prop-types';
import { Amount, BrandName, Price, ProductName, Wrapper } from './ProductInfo.styled';

class ProductInfo extends Component {
    static defaultProps = {
        brandName: 'brand',
        productName: 'product',
    };
    render() {
        const { children, brandName, productName, price } = this.props;
        const { amount, currency: { symbol } } = price;

        return (
            <Wrapper>
                <BrandName>
                    {brandName}
                </BrandName>
                <ProductName>
                    {productName}
                </ProductName>
                    {children}
                <Price>
                    Price:
                </Price>
                <Amount>
                    {symbol + amount}
                </Amount>
            </Wrapper>
        );
    }
}

ProductInfo.propTypes = {
    children: PropTypes.any,
    brandName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
}

export default ProductInfo;