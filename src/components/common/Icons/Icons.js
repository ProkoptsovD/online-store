import React, {Component} from "react";
import PropTypes from 'prop-types';
import icons from '../../../icons/icons.svg';

class Icons extends Component {
    render () {
        return (
            <>
                <svg {...this.props}>
                    <use href={`${icons}#${this.props.id}`}></use>
                </svg>
            </>
        )
    }
}

Icons.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Icons;