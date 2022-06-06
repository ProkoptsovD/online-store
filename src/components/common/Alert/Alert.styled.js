import styled from 'styled-components';

export const AlertWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AlertTitle = styled.strong`
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    font-size: ${({ theme }) => theme.typography.fontSize['600']};
    text-transform: uppercase;

    color: ${({ theme, error }) => error ? theme.colors.danger['100'] : theme.colors.success['100']};
`;
export const AlertBody = styled.p`
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    font-size: ${({ theme }) => theme.typography.fontSize['500']};
    line-height: 1.2;
`;