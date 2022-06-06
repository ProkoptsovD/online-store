import styled, { css } from 'styled-components';

const commonCss = css`
    font-size: ${props => props.theme.typography.fontSize['700']};
    line-height: 0.9;
`;

export const Wrapper = styled.div`
    max-width: 292px;
`;
export const BrandName = styled.p`
    margin-bottom: ${props => props.theme.spacing(4)};

    font-weight: ${props => props.theme.typography.fontWeight['600']};
    ${commonCss}
`;
export const ProductName = styled.h1`
    margin-bottom: ${props => props.theme.spacing(10)};
    
    font-weight: ${props => props.theme.typography.fontWeight['400']};
    ${commonCss}
`;
export const Price = styled.b`
    display: block;

    margin-bottom: ${({ theme }) => theme.spacing(2.5)};
    
    font-family: ${({ theme }) => theme.typography.fontFamily['2']};
    font-size: ${({ theme }) => theme.typography.fontSize['500']};
`;
export const Amount = styled.strong`
    display: block;

    font-size: ${({ theme }) => theme.typography.fontSize['600']};
    line-height: 0.75;
    
    text-transform: uppercase;
`;