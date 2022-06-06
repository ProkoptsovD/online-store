import {Component} from "react";
import { createPortal } from "react-dom";
import { Wrapper } from "./Overlay.styled";
import { refs } from '../../constants/refs';
import { connect } from "react-redux";
import { closeOverlay } from "../../redux/actions/actions";
import PropTypes from 'prop-types';
import Modal from "../common/Modal";
import Container from "../common/Container";


class Overlay extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeKeyDown);
    }
    handleEscapeKeyDown = (e) => {
        const ESCAPE_KEY_CODE = 'Escape';
        const { closeOverlay } = this.props;
        const isEscapePressed = e.key === ESCAPE_KEY_CODE;

        isEscapePressed && closeOverlay();
    }
    handleOverlayClick = (e) => {
        const { closeOverlay } = this.props;
        const isOverlayClicked = e.target === e.currentTarget;

        if (!isOverlayClicked) return;

        closeOverlay();
    }
    render() {
        const { children, modalType } = this.props;

        return createPortal(
            (<Wrapper id="overlay">
                <Container onClick={this.handleOverlayClick}>
                    <Modal id="modal" modalType={modalType}>
                        {children}
                    </Modal>
                </Container>
            </Wrapper>),
            refs.overlayContainer
        );
    }
}

Overlay.propTypes = {
    children: PropTypes.node,
}

const mapDispatchToProps = (dispatch) => ({
    closeOverlay: () => {
        dispatch(closeOverlay());
    },
});

export default connect(null, mapDispatchToProps)(Overlay);