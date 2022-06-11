import React, {Component} from "react";
import { ActionList, ListItem } from "./Actionbar.styled";
import PropTypes from 'prop-types';

class Actionbar extends Component {
    renderActionListItems = () => {
        const { children } = this.props

        return children.map((child, idx) => (
            <ListItem key={idx}>
                {child}
            </ListItem>)
        );
    }
    render () {
        const { children } = this.props;
        const isArr = Array.isArray(children);

        return (
            <ActionList>
                {
                    isArr
                        ? this.renderActionListItems()
                        : children
                }
            </ActionList>
        )
    }
}

Actionbar.propTypes = {
    children: PropTypes.node,
}

export default Actionbar;