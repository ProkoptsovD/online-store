import React, {Component} from "react";
import PropTypes from 'prop-types';
import { StyledIconButton } from "./IconButton.styled";

class IconButton extends Component {
    static defaultProps = {
        type: 'button',
        onClick: () => {},
        href: null,
        disabled: false,
    }

    render () {
        const { href } = this.props;

        return (
            href
                ?  <StyledIconButton {...this.props}
                        as="a"
                    >
                        {this.props.children}
                    </StyledIconButton>
                : <StyledIconButton {...this.props}
                        as="button"
                    >
                        {this.props.children}
                    </StyledIconButton>
        );
    }
}

IconButton.propTypes = {
    children: PropTypes.node,
}

export default IconButton;