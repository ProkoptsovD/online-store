import styled, {css} from 'styled-components';
import IconButton from '../../common/IconButton';

const commonButtonCSS = css`
    ${({ quantatyPanelType }) => {
        if (quantatyPanelType === 'default') {
            return `
                width: 45px;
                height: 45px;
            `
        };
        if (quantatyPanelType === 'mini') {
            return `
                width: 24px;
                height: 24px;
            `
        }
    }}

    border: 1px solid ${({ theme }) => theme.colors.dark['300']};

    & > svg {
        width: 75%;
        height: 75%;
        
        fill: ${({ theme }) => theme.colors.dark['300']};
    }

    &:active {
        transform: scale(1);
        box-shadow: inset 0px 0px 7px #c1c1c1;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ quantatyPanelType, theme }) => {
        if (quantatyPanelType === 'default') {
            return `
                margin-right: ${theme.spacing(6)};
            `
        };
        if (quantatyPanelType === 'mini') {
            return `
                margin-right: ${theme.spacing(2)};
            `
        }
    }}

    ${props => props.vertical && css`
        flex-direction: column;
    `}
`;
export const IncreaseButton = styled(IconButton)`
    ${commonButtonCSS}
`;
export const DecreaseButton = styled(IconButton)`
    ${commonButtonCSS}

    & > svg {
        width: 50%;
    }
`;
export const DisplayedQuantaty = styled.span`
    display: block;

    font-weight: ${({ theme }) => theme.typography.fontWeight['500']};
    font-size: ${({ theme, quantatyPanelType }) => {
                if (quantatyPanelType === 'default') return theme.typography.fontSize['600'];
                if (quantatyPanelType === 'mini') return theme.typography.fontSize['400'];
            }
        };
    line-height: ${({ theme }) => theme.typography.lineHeight['1.6']};
    text-align: center;
    `;