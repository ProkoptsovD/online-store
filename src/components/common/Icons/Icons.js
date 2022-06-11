import React, {Component} from "react";
import PropTypes from 'prop-types';
import icons from '../../../icons/icons.svg';

class Icons extends Component {
    render () {
        const { id } = this.props;

        return (
            <>
                <svg {...this.props}>
                    <use href={`${icons}#${id}`}></use>
                </svg>
            </>
        )
    }
}

Icons.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Icons;