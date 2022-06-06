import { Component } from 'react'
import { Wrapper, TermsAndConditions } from './Agreement.styled';
import Checkbox from '../../common/Checkbox';

class Agreement extends Component {
    render() {
        return (
            <Wrapper>
                <Checkbox {...this.props}/>
                <span>I agree with</span>&nbsp;
                <TermsAndConditions to="/terms-and-conditions">
                    terms and conditions
                </TermsAndConditions>
            </Wrapper>
        )
    }
}

export default Agreement;