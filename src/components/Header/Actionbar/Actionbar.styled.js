import styled from 'styled-components';

export const ActionList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: min-content;
`;
export const ListItem = styled.li`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    &:not(:last-child) {
        margin-right: ${props => props.theme.spacing(5)};
    }
`;