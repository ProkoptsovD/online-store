import styled from 'styled-components';

export const CategoryName = styled.h1`
    margin-bottom: ${props => props.theme.spacing(26)};

    font-weight: ${props => props.theme.typography.fontWeight['400']};
    font-size: ${props => props.theme.typography.fontSize['800']};
    text-transform: capitalize;
    line-height: ${props => props.theme.typography.lineHeight['1.6']};
`;