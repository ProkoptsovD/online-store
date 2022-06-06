import React from "react";
import PropTypes from 'prop-types';
import Icons from '../common/Icons';
import { Card, Label, PreviewImage, Price, QuickAddButton, StyledLink } from "./PreviewCard.styled";
import {ReactComponent as ImagePlaceholder} from '../../icons/image-placeholder.svg';

class PreviewCard extends React.Component {
    getPrice = () => {
        const { product: { prices }, currency } = this.props;
        
        return prices[currency];
    };
    render() {
        const { product: { brand, name, id, inStock, gallery, category }, addProduct } = this.props;
        const [url] = gallery;
        const price = this.getPrice();

        return (
            <Card>
                <StyledLink 
                    to={`/${category}/${id}`}
                    instock={`${inStock}`}
                >
                    {   url
                            ? <PreviewImage src={url} alt={name} />
                            : <ImagePlaceholder />
                    }
                    <Label>
                        {`${brand} ${name}`}
                    </Label>
                    <Price>
                        {price?.currency?.symbol}{price?.amount}
                    </Price>
                    { 
                        inStock && <QuickAddButton
                                        value={id}
                                        onClick={addProduct}
                                    >
                                        <Icons id="cart" />
                                    </QuickAddButton>
                    }
                </StyledLink>
            </Card>
        );
    }
}

PreviewCard.propTypes = {
    product: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string),
    }),
    currency: PropTypes.number,
}

export default PreviewCard;