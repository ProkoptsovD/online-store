import React, {Component} from "react";
import PropTypes from 'prop-types';
import {StyledSection} from './Section.styled';
import Container from '../Container/';

class Section extends Component {
    render () {
        const { children } = this.props;

        return (
            <StyledSection>
                <Container>
                    {children}
                </Container>
            </StyledSection>
        );
    }
}

Section.propTypes = {
    children: PropTypes.node,
}

export default Section;