import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledModal } from './Modal.styled';

class Modal extends Component {
    render() {
        const { children, modalType } = this.props;

        return (
            <StyledModal modalType={modalType}>
                {children}
            </StyledModal>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node,
    modalType: PropTypes.string,
}

export default Modal;
