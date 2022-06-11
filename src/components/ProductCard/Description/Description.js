import { Component } from 'react';
import parse from 'html-react-parser';
import { DescriptionWrapper } from './Description.styled';

class Description extends Component {
    regExp = /<\/?[a-z][\s\S]*>/i;
    render () {
        const { descr } = this.props;
        const isHTMLString = this.regExp.test(descr);

        return (
            <DescriptionWrapper>
                {
                    isHTMLString
                    ? parse(descr, {
                        replace: domNode => {
                            if (domNode.name === 'h1') {
                                const content = domNode.children[0].data;
    
                                return <h2>{content}</h2>
                            }
                            if (domNode.name === 'h3') {
                                const content = domNode.children[0].data;
    
                                return <h2>{content}</h2>
                            }
                        }
                    })
                    : <p>{descr}</p>
                }
            </DescriptionWrapper>
        );
    }
}

export default Description;