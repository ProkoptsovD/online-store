import styled from 'styled-components';
import IconButton from "../common/IconButton";

export const MiniCartBtn = styled(IconButton)`
    position: relative;

    width: ${props => props.theme.sizes.btn.xs};
    height: ${props => props.theme.sizes.btn.xs};

    &::after {
    position: absolute;
    right: -12px;
    bottom: 9px;

    display: ${props => (props.itemsCount === '0' || !props.itemsCount) ? 'none' : 'inline-flex'};
    align-items: center;
    justify-content: center;

    content: '${props => props.itemsCount}';

    width: ${props => props.theme.sizes.btn.xs};
    height: ${props => props.theme.sizes.btn.xs};

    font-family: ${props => props.theme.typography.fontFamily['2']};
    font-weight: ${props => props.theme.typography.fontWeight['700']};
    font-size: ${props => props.theme.typography.fontSize['300']};

    border-radius: 50%;
    background-color: ${props => props.theme.colors.dark['300']};
    color: ${props => props.theme.colors.light['100']};

    }
`;