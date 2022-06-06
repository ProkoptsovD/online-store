import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from '../common/IconButton';

export const Card = styled.article`
    position: relative;
    
    height: 100%;
    color: ${props => props.inStock ? props.theme.colors.dark['300'] : props.theme.colors.dark['100']};
`;
export const StyledLink = styled(Link)`

    display: block;
    height: 100%;
    padding: ${props => props.theme.spacing(4)};

    color: inherit;
    transition: ${props => props.theme.setTransition(null, 'box-shadow')};

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.shadows.v1};
    }

    &::before {
        position: absolute;
        inset: 0;

        content: '${props => props.content}';

        display: ${props => props.instock === 'true' ? 'none' : 'flex'};
        align-items: center;
        justify-content: center;

        font-size: ${props => props.theme.typography.fontSize['600']};
        text-transform: uppercase;

        background-color: ${({theme}) => theme.colors.light['200']};
        color: ${({theme}) => theme.colors.dark['100']};
    }
`;
export const PreviewImage = styled.img`
    width: ${props => props.theme.sizes.previewCardImage.w};
    height: ${props => props.theme.sizes.previewCardImage.h};

    margin-bottom: ${props => props.theme.spacing(6)};
    object-fit: contain;
`;

export const Label = styled.h2`
    font-weight: ${props => props.theme.typography.fontWeight['300']};
    font-size: ${props => props.theme.typography.fontSize['500']};
    line-height: ${props => props.theme.typography.lineHeight['1.6']};

    color: ${({ theme }) => theme.colors.dark['300']};
`;
export const Price = styled.p`
    font-weight: ${props => props.theme.typography.fontWeight['500']};
    font-size: ${props => props.theme.typography.fontSize['500']};
    line-height: ${props => props.theme.typography.lineHeight['1.6']};

    color: ${({ theme }) => theme.colors.dark['300']};
`;
export const QuickAddButton = styled(IconButton)`
    position: absolute;
    right: 31px;
    bottom: 72px;

    width: ${props => props.theme.sizes.btn.lg};
    height: ${props => props.theme.sizes.btn.lg};

    border-radius: 50%;
    background-color: ${props => props.theme.colors.accent['100']};
    
    transition: ${props => props.theme.setTransition(null, 'opacity', 'visibility')};
    
    opacity: 0;
    visibility: hidden;
    pointer-events: none;


    ${StyledLink}:hover &,
    ${StyledLink}:focus & {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    }

    & > svg {
        width: 46.15%;
        height: 46.15%;

        color: ${props => props.theme.colors.light['100']};
    }
`;