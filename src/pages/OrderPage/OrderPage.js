import { Component } from "react";
import Section from "../../components/common/Section";
import OrderForm from "../../components/OrderForm";
import { Title } from "../CartPage/CartPage.styled";
import { PageDescription, FormPageContainer } from "./OrderPage.styled";

class OrderPage extends Component {
    render() {
        return (
            <Section>
                <Title>
                    Order confirmation
                </Title>
                <FormPageContainer>
                    <PageDescription>
                        Please, fill in your contact information. Our manager will get in touch with your for order conformation.
                    </PageDescription>
                    <OrderForm />
                </FormPageContainer>
            </Section>
        )
    }
}

export default OrderPage;
