import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    inset: ${props => props.theme.sizes.header.height} 0 0 0;

    background-color: ${props => props.theme.colors.neutral['300']};

    overflow-y: scroll;
    scroll-behavior: smooth;
`;
