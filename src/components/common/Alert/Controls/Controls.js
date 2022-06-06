import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Controls.styled';

class Controls extends Component {
    render() {
        const { children, to, onClick } = this.props;

        return (
            <StyledLink
                to={to}
                onClick={onClick}
            >
                {children}
            </StyledLink>
        )
    }
}

Controls.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
}

export default Controls;
