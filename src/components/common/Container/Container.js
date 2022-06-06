import { Component } from "react";
import PropTypes from 'prop-types';
import { ContainerDiv } from './Container.styled.js';


class Container extends Component {
    render () {
        const { children, onClick } = this.props;

        return (
            <ContainerDiv onClick={onClick ? onClick : () => {}}>
                {children}
            </ContainerDiv>
        )
    }
}

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;