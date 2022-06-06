import styled, { css } from 'styled-components';

export const OuterWrapper = styled.div`
    display: flex;
`;
export const InnerWrapper = styled.div`
    margin-right: auto;

    ${({ productCardType, theme }) => {
            if (productCardType === 'default') {
                return css`
                    & > div:not(:last-child) {
                        margin-bottom: ${theme.spacing(4)}
                    }
                `
            }
            if (productCardType === 'mini') {
                return css`
                    & > div:not(:last-child) {
                        margin-bottom: ${theme.spacing(2)}
                    }
                `
            }
        }
    }
`;

export const BrandName = styled.p`
    ${({ productCardType, theme }) => {
        if (productCardType === 'mini') {
            return `
                font-weight: ${theme.typography.fontWeight['300']};
                line-height: ${theme.typography.lineHeight['1.6']};
            `;
        }
        if (productCardType === 'default') {
            return `
                margin-bottom: ${theme.spacing(4)};
                font-weight: ${theme.typography.fontWeight['600']};
                font-size: ${theme.typography.fontSize['700']};
                line-height: 0.9;
            `;
        }
    }
}`;
export const ProductName = styled.h2`
    ${({ productCardType, theme }) => {
            if (productCardType === 'mini') {
                return `
                    margin-bottom: ${theme.spacing(1)};
                    font-weight: ${theme.typography.fontWeight['300']};
                    line-height: ${theme.typography.lineHeight['1.6']};
                `;
            }
            if (productCardType === 'default') {
                return `
                    margin-bottom: ${theme.spacing(5)};
                    font-weight: ${theme.typography.fontWeight['400']};
                    font-size: ${theme.typography.fontSize['700']};
                    line-height: 0.9;
                `;
            }
        }
    }
`;
export const Price = styled.strong`
    display: block;

    ${({ productCardType, theme }) => {
        if (productCardType === 'mini') {
            return `
                margin-bottom: ${theme.spacing(2)};
                font-weight: ${theme.typography.fontWeight['500']};
                line-height: ${theme.typography.lineHeight['1.6']};
            `;
        }
        if (productCardType === 'default') {
            return `
                margin-bottom: ${theme.spacing(5)};
                font-size: ${theme.typography.fontSize['600']};
                line-height: 1;
            `;
        }
    }
}
`;
