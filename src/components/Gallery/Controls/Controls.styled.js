import styled, { css } from 'styled-components';
import IconButton from '../../common/IconButton';

export const Wrapper = styled.div`
    display: inline-flex;
    min-width: min-content;
`;
const commonCss = css`
    width: ${props => props.theme.sizes.btn.xss};
    height: ${props => props.theme.sizes.btn.xss};

    padding: 2px;

    background-color: ${props => props.theme.colors.dark['400']};

    & > svg {
        width: 75%;
        height: 75%;

        fill: ${props => props.theme.colors.light['100']};
    }
`;
export const PrevButton = styled(IconButton)`
    ${commonCss}
    margin-right: ${props => props.theme.spacing(2)};
    
    &:active {
        filter: brightness(50);
    }
`;
export const NextButton = styled(IconButton)`
    ${commonCss}
    transform: rotate(180deg);
    
    &:active {
        filter: brightness(50);
        transform: rotate(180deg);
    }
`;