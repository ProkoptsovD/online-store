import styled from 'styled-components';

export const Wrapper = styled.div`
    height: calc(100vh - ${props => props.theme.sizes.header.height});
    padding-top: ${props => props.theme.spacing(40)};

    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;

    background: #BBD2C5;
    background: linear-gradient(to right, #292E49, #536976, #BBD2C5);
    color: ${props => props.theme.colors.light['100']};
`;
export const Error = styled.strong`
    display: block;
    margin-bottom: ${props => props.theme.spacing(12)};

    font-size: 10rem;
`;
export const ErrorName = styled.h1`
`;
export const Details = styled.p`
    font-size: .85rem;
    text-transform: initial;
`;