import { Component } from 'react'
import Section from '../../components/common/Section';

class TermsAndConditionsPage extends Component {
    renderTermsAndConditions = () => {
        const arr = [];

        for(let i = 0; i <= 10; i += 1) {
            const term = (
                <li key={i}
                    style={{
                        marginBottom: i !== 10 ? '16px' : '0',
                        fontWeight: '700',
                    }}
                >
                    Term
                    <p style={{
                        marginTop: '8px',
                        fontWeight: '400',
                    }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed accusamus iusto inventore, libero illum doloremque ipsa animi minima architecto unde totam ut dolorum enim aliquam obcaecati dolore temporibus nam repellat sit quae quam soluta laborum eaque dicta. Odit accusamus eveniet sint qui odio eius cumque corporis, officia excepturi quisquam ducimus, dicta, nisi sapiente unde modi. Corrupti voluptas accusamus doloribus neque iusto voluptatibus porro incidunt, repellendus, omnis debitis commodi adipisci, voluptatem quod architecto deleniti earum laboriosam deserunt. Quisquam magni quod placeat optio nemo, eos animi! Illo libero veritatis sequi aut nobis. Consequatur omnis minima, fuga possimus aut impedit tempore voluptatum quo!
                    </p>
                </li>
            );
            arr.push(term);
        }
        return arr;
    }
    render() {
        return (
            <Section>
                <h1 style={{
                        textAlign: 'center',
                        marginBottom: '16px',
                    }}
                >
                    Terms and Conditions
                </h1>
                <ol>
                    {this.renderTermsAndConditions()}
                </ol>
            </Section>
        )
    }
}

export default TermsAndConditionsPage;