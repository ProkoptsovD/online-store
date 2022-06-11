import styled from 'styled-components';
import TextButton from '../common/TextButton';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    width: 292px; 

    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-left: ${({ theme }) => theme.spacing(25)};

    color: ${({ instock, theme }) => instock ? theme.colors.dark['300'] : theme.colors.dark['100']};

    & ul:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
    & ul:last-child {
        margin-bottom: ${({ theme }) => theme.spacing(10)};
    }
    & strong:last-of-type {
        margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
`;

export const AddToCartButton = styled(TextButton).attrs(props => ({
    disabled: props.disabled,
}))`
    width: 100%;
    min-height: 52px;

    margin-bottom: ${({ theme }) => theme.spacing(9)};
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.colors.accent['100']};
    color: ${({ theme }) => theme.colors.light['100']};

    transition: ${({ theme }) => theme.setTransition('fast', 'background-color', 'color', 'filter')};
    
    &:disabled {
        cursor: initial;
        background-color: ${({ theme }) => theme.colors.neutral['600']};
    }
    &:not(:disabled):active {
        filter: brightness(90%);
    }
`;