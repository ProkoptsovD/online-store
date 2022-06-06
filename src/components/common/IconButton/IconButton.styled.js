import styled from 'styled-components';

const Button =  styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    font: inherit;
    
    border: none;
    
    background-color: transparent;
    color: inherit;

    cursor: pointer;

    & > svg {
        width: 100%;
        height: 100%;

        fill: ${props => props.theme.colors.dark['200']};
    }
    &:active {
        transform: scale(0.9);
    }
    &:disabled {
        transform: scale(1);
        cursor: auto;
    }
`;
export const StyledIconButton = ({children, ...props}) =>
    <Button {...props}>{children}</Button>;