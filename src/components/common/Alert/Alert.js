import { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../../Overlay';
import { AlertBody, AlertTitle, AlertWrapper } from './Alert.styled';
import Controls from './Controls/';
import { connect } from 'react-redux';
import { closeAlert } from '../../../redux/actions/actions';
import { handleBodyScroll } from '../../../helpers/handleBodyScroll';

class Alert extends Component {
    componentDidMount () {
        handleBodyScroll.disable();
    }
    handleControlsClick = (e) => {    
        const { closeMessage } = this.props;

        closeMessage();
    }
    render() {
        const { message, type, error, to, controlsText } = this.props;

        return (
            <Overlay key='alert' modalType='alert'>
                <AlertWrapper>
                    <AlertTitle error={error}>
                        {type}
                    </AlertTitle>
                    <AlertBody>
                        {message}
                    </AlertBody>
                    <Controls
                        to={to}
                        onClick={this.handleControlsClick}
                    >
                        {controlsText}
                    </Controls>
                </AlertWrapper>
            </Overlay>
        );
    }
}

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.bool,
    to: PropTypes.string,
    controlsText: PropTypes.string,
}

const mapStateToProps = (state) => ({
    message: state.alert.message,
    type: state.alert.type
});
const mapDispatchToProps = (dispatch) => ({
    closeMessage: () => {
        dispatch(closeAlert());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
