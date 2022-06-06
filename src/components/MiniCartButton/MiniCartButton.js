import { Component } from "react";
import { connect } from "react-redux";
import { MiniCartBtn } from "./MiniCartButton.styled";
import { closeOverlay, openOverlay } from "../../redux/actions/actions";
import PropTypes from 'prop-types';
import Icons from "../common/Icons";

class MiniCartButton extends Component {
    handleMiniCartBtnClick = () => {
        const { isOpened, open, close } = this.props;

        isOpened ? close() : open();
    }
    render() {
        const { itemsCount } = this.props;
        
        return (
            <MiniCartBtn
                itemsCount={itemsCount}
                onClick={this.handleMiniCartBtnClick}
            >
                <Icons id="cart"/>
            </MiniCartBtn>
        );
    }
}

MiniCartBtn.propTypes = {
    itemsCount: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    isOpened: state.overlay.isOpened,
});
const mapDispatchToProps = (dispatch) => ({
    open: () => {
        dispatch(openOverlay());
    },
    close: () => {
        dispatch(closeOverlay());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartButton);