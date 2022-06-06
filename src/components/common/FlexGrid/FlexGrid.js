import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListOfItems } from './FlexGrid.styled';

class FlexGrid extends Component {
    populateFlexGridChildren = () => {
        return this.props.children.map((child, idx) => (
            <ListItem key={idx}>
                {child}
            </ListItem>
            ));
    }
    render () {
        const {children} = this.props;
        const isArr = children instanceof Array;

        return (
                !isArr
                    ? children
                    : <ListOfItems>
                        {this.populateFlexGridChildren()}
                    </ListOfItems>
        );
    }
}

FlexGrid.propTypes = {
    children: PropTypes.node,
}

export default FlexGrid;