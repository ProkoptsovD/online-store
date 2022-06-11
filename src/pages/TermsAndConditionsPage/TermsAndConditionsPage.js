import { Component } from 'react';
import { ListItem, PageTitle, Paragraph } from './TermsAndConditionsPage.styled';
import Section from '../../components/common/Section';

class TermsAndConditionsPage extends Component {
    renderTermsAndConditions = () => Array.from({length: 10}, (_, i) => (
            <ListItem key={i}>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed accusamus iusto inventore, libero illum doloremque ipsa animi minima architecto unde totam ut dolorum enim aliquam obcaecati dolore temporibus nam repellat sit quae quam soluta laborum eaque dicta. Odit accusamus eveniet sint qui odio eius cumque corporis, officia excepturi quisquam ducimus, dicta, nisi sapiente unde modi. Corrupti voluptas accusamus doloribus neque iusto voluptatibus porro incidunt, repellendus, omnis debitis commodi adipisci, voluptatem quod architecto deleniti earum laboriosam deserunt. Quisquam magni quod placeat optio nemo, eos animi! Illo libero veritatis sequi aut nobis. Consequatur omnis minima, fuga possimus aut impedit tempore voluptatum quo!
                </Paragraph>
            </ListItem>
    ));
    render() {
        return (
            <Section>
                <PageTitle>
                    Terms and Conditions
                </PageTitle>
                <ol>
                    {this.renderTermsAndConditions()}
                </ol>
            </Section>
        )
    }
}

export default TermsAndConditionsPage;