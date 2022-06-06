import styled, { css } from 'styled-components';

const miniCart = css`
    width: ${({ theme }) => theme.sizes.modal.w};
    margin-left: auto;
`;
const alert = css`
    position: absolute;
    top: 50%;
    left: 50%;
    
    width: 500px;
    min-height: min-content;
    padding: ${({ theme }) => theme.spacing(8)};
    
    transform: translate(-50%, -50%);
`;

export const StyledModal = styled.div`
    padding: ${({ theme }) => theme.spacing(4)};
    pointer-events: all;
    background-color: ${({ theme }) => theme.colors.light['100']};

    ${({ modalType }) => {
            switch(modalType) {
                case 'mini-cart':
                    return miniCart;
                case 'alert':
                    return alert;
                default:
                    return '';
            }
        }
    }
`;