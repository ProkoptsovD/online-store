import { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckboxLabel, StyledCheckbox, Wrapper } from './Checkbox.styled';

class Checkbox extends Component {
    render() {
        const { onChange, checked } = this.props;

        return (
            <Wrapper>
                <StyledCheckbox 
                    onChange={onChange}
                    checked={checked}
                />
                <CheckboxLabel />
            </Wrapper>
        )
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
}

export default Checkbox;