import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    min-width: 20px;
    padding: ${({ theme }) => theme.spacing('2')};

    background-color: ${({ theme }) => theme.colors.accent['100']};
    color: ${({ theme }) => theme.colors.light['100']};
`;