import { Component } from "react";
import PropTypes from 'prop-types';
import { Title } from "./CartPage.styled";
import Section from "../../components/common/Section";
import Cart from '../../components/Cart/';
import { withRouter } from "../../hoc/withRouter";

class CartPage extends Component {
    render() {
        const { title } = this.props;

        return (
            <Section>
                <Title>
                    {title}
                </Title>
                <Cart
                    cartType="default"
                    galleryType="mini"
                    optionPickerType="default"
                    quantatyPanelType="default"
                    productCardType="default"
                />
            </Section>
        )
    }
}

CartPage.propTypes = {
    title: PropTypes.string,
}

export default withRouter(CartPage);