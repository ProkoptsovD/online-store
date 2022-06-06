import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    
`;
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ListItem = styled.li`
    position: relative;

    &:not(:last-child) {
        margin-right: ${props => props.theme.spacing(8)};
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
        
    text-align: center;
    text-shadow: 0 0 1px transparent; //prevents content shifting
    line-height: ${props => props.theme.typography.lineHeight['1.2']};
    text-transform: uppercase;
    
    color: inherit;

    cursor: pointer;

    &:visited {
        color: inherit;
    }

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.accent['100']};
    }

    &::after {
        position: absolute;
        bottom: calc(-100% - 11px);
        left: 0;

        content: '';
        width: 100%;
        height: 2px;

        background-color: ${props => props.theme.colors.accent['100']};
        
        opacity: 0;
        visibility: hidden;
        transition: ${props => props.theme.setTransition('fast', 'font-weight', 'opacity', 'visibility')};                    
    }

    &.active {
        font-weight: ${props => props.theme.typography.fontWeight['600']};
        color: ${props => props.theme.colors.accent['100']};
    }
    
    &.active::after {
        opacity: 1;
        visibility: visible;
    }
`