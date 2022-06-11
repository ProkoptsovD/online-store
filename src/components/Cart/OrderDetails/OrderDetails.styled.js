import styled from 'styled-components';

export const DetailsTable = styled.table`
    font-size: ${({ theme, fontSize }) => fontSize || theme.typography.fontSize['600']};
    line-height: ${({ lineHeight }) => lineHeight || '1.17'};
    text-transform: capitalize;
    
    border-spacing: ${({ theme, borderSpacing }) => borderSpacing || theme.spacing(2)};
`;
export const TableBody = styled.tbody``;

export const Row = styled.tr`
    font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontSize['700']};
`;
export const Data = styled.td`
    &:last-child {
        font-weight: ${({ theme, fontWeight }) => fontWeight || theme.typography.fontWeight['700']};
    }
`;
