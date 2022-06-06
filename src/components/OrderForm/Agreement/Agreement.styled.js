import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    & > :first-child {
        margin-right: ${({ theme }) => theme.spacing(3)};
    }
`;
export const TermsAndConditions = styled(Link)`
    font: inherit;
    color: inherit;
    text-decoration: underline;
`;