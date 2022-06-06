import styled from 'styled-components';

export const ToastWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: ${({ padding }) => padding || '16px'};

    font-size: ${({ fs }) => fs || '.8em'};
    line-height: 1.2;

    background-color: ${({ bg }) => bg};
    color: ${({ clr }) => clr || '#ffffff'};
    border-radius: 10px;

    & > p {
        margin: 0 15px;
        &:hover {
            cursor: default;
        }
    }

    & > svg {
        fill: ${({ color }) => color || '#ffffff'};
        width: 32px;
        height: 32px;
    }
    & > svg:last-of-type {
        fill: #8B0000;
        &:hover {
            cursor: pointer;
        }
    }
`;