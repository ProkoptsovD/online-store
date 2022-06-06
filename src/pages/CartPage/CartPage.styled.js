import styled from 'styled-components';

export const Title = styled.h1`
    padding-bottom: ${({ theme }) => theme.spacing(14)};

    font-size: ${({ theme, fontSize }) => fontSize || theme.typography.fontSize['750']};
    line-height: ${({ lineHeight }) => lineHeight || '1.26'};

    text-transform: ${({ textTransform }) => textTransform || 'uppercase'};
`;