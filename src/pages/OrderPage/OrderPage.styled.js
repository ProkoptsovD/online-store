import styled from 'styled-components';

export const PageDescription = styled.p`
    margin-bottom: ${({ theme }) => theme.spacing(8)};
    font-weight: ${({ theme }) => theme.typography.fontWeight['600']};
    line-height: 1.2;
`;
export const FormPageContainer = styled.div`
    max-width: 600px;
`;
