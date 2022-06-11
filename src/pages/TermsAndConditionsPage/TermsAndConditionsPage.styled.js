import styled from 'styled-components';

export const PageTitle = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    text-align: center;
`;

export const ListItem = styled.li`
    font-weight: ${({ theme }) => theme.typography.fontWeight['700']};

    &:not(:last-child) {
        marginBottom: ${({ theme }) => theme.spacing(4)};
    }
`;

export const Paragraph = styled.p`
    margin-top: ${({ theme }) => theme.spacing(2)};
    font-weight: ${({ theme }) => theme.typography.fontWeight['400']};
    text-align: justify;
    line-height: 1.2;
`;
