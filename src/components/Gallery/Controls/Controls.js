import {Component} from "react";
import PropTypes from 'prop-types';
import { NextButton, PrevButton, Wrapper } from "./Controls.styled";
import Icons from "../../common/Icons";

class Controls extends Component {
    static defaultProps = {
        prev: () => {},
        next: () => {},
    }
    render() {
        const { prev, next } = this.props;

        return (
            <Wrapper>
                <PrevButton onClick={prev}>
                    <Icons id="chevron" />
                </PrevButton>
                <NextButton onClick={next}>
                    <Icons id="chevron" />
                </NextButton>
            </Wrapper>
        );
    }
}

Controls.propTypes = {
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
}

export default Controls;