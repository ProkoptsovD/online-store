import styled from 'styled-components';
import { ContainerDiv } from '../common/Container/Container.styled';

export const HeaderTag = styled.header`
    position: sticky;
    top: 0;

    width: 100%;
    height: ${props => props.theme.sizes.header.height};
    background-color: ${props => props.theme.colors.light['100']};

    z-index: 5;
`;

export const HeaderConatiner = styled(ContainerDiv)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`