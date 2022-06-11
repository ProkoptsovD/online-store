import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
    line-height: ${({ theme }) => theme.typography.lineHeight['1.6']};
    color: ${({ theme }) => theme.colors.dark['300']};
    text-align: justify;

    & > :nth-child(odd) {
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }
    & > :nth-child(even) {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
    & > :last-child {
        margin-bottom: 0;
    }

    & ul {
        list-style: initial;
        padding-left: 17px;

        & > li:not(:last-child) {
            margin-bottom: ${({ theme }) => theme.spacing(2)};
        }
    }

    & h2 {
        font-size: ${({ theme }) => theme.typography.fontSize['500']};
        font-weight: ${({ theme }) => theme.typography.fontWeight['500']};
    }
`;