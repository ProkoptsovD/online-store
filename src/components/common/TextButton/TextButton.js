import { Component } from "react";
import PropTypes from 'prop-types';
import { TextBtn } from "./TextButton.styled";

class TextButton extends Component {
    static defaultProps = {
        children: 'button',
    }

    render () {
        const { children, disabled } = this.props;

        return (
            <TextBtn
                {...this.props}
                disabled={disabled || false}
            >
                {children}
            </TextBtn>
        )
    }
}

TextButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.node,
    ]),
}

export default TextButton;