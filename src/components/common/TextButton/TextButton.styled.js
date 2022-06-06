import styled from 'styled-components';

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 20px;
    min-height: 20px;

    font: inherit;
    font-weight: ${({ theme }) => theme.typography.fontWeight['600']};

    border: none;

    background-color: transparent;
    color: inherit;

    cursor: pointer;
`;

export const TextBtn  = ({children, ...props}) =>
<Button {...props}>{children}</Button>;