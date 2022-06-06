import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//======================================= common elements ================================//
export const OuterWrapper = styled.div`
    
`;
export const NothingAdded = styled.p`
    text-align: center
`;
export const ProductList = styled.ul`
`;
export const ListItem = styled.li`
    ${({ cartType, theme }) => {
            if (cartType === 'default') {
                return css`
                    padding-top: ${theme.spacing(6)};
                    padding-bottom: ${theme.spacing(8)};
                    &:first-child {
                        border-top: 1px solid  ${theme.colors.neutral['400']};
                        border-bottom: 1px solid  ${theme.colors.neutral['400']};
                    }
                    &:not(:first-child) {
                        border-bottom: 1px solid  ${theme.colors.neutral['400']};
                    }
                    &:not(:last-child) {
                        margin-bottom: ${theme.spacing(8)};
                    }
                `
            };
            if (cartType === 'mini') {
                return css`
                    position: relative;
                    &:not(:last-child) {
                        margin-bottom: ${({ theme }) => theme.spacing(10)};
                    }
                `
            }
        }
    }       
`
//======================================= elements for MINI type =========================//
export const CartNameWrapper = styled.div`
    margin-bottom: ${props => props.theme.spacing(8)};
    line-height: ${props => props.theme.typography.lineHeight['1.6']};
`;
export const CartName = styled.b`
`;
export const TotalNumberOfItems = styled.span`
    font-weight: ${props => props.theme.typography.fontWeight['500']};
`;
export const ItemWord = styled(TotalNumberOfItems)`
font-weight: ${props => props.theme.typography.fontWeight['500']};
`;
export const TotalPriceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: ${props => props.theme.spacing(8)};
    margin-bottom: ${props => props.theme.spacing(8)};
`;
export const Total = styled.b`
    font-family: ${props => props.theme.typography.fontFamily['4']};
    font-weight: ${props => props.theme.typography.fontWeight['500']};
    line-height: 1.12;
`;
export const Price = styled.strong`
    line-height: ${props => props.theme.typography.lineHeight['1.6']};
`;
const LinkCSS = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 140px;
    height: 43px;

    text-transform: uppercase;

    border: 1px solid;
    border-color: ${props => props.theme.colors.dark['300']};

    background-color: ${props => props.theme.colors.light['100']};
    color: ${props => props.theme.colors.dark['300']};

    transition: ${props => props.theme.setTransition(null, 'background-color', 'color', 'border-color', 'filter')};

    &:hover {
        border-color: ${props => props.theme.colors.accent['100']};
        background-color: ${props => props.theme.colors.accent['100']};
        color: ${props => props.theme.colors.light['100']};
    }

    &:active {
        filter: brightness(90%);
    }
`;
//======================================= elements for DEFAULT type ======================//
export const OrderButton = styled(LinkCSS)`
    min-width: ${({ minWidth }) => minWidth || '280px'};
    min-height: ${({ minHeight }) => minHeight || '43px'};

    margin-top: ${({ theme }) => theme.spacing(4)};
    border-color: ${props => props.theme.colors.accent['100']};
    background-color: ${props => props.theme.colors.accent['100']};
    color: ${props => props.theme.colors.light['100']};

    &:hover, &:focus {
        filter: brightness(90%);
    }
`;
export const ViewBagButton = styled(LinkCSS)`
    margin-right: ${props => props.theme.spacing(3)};
`;
export const CheckOutButton = styled(LinkCSS)`
`;