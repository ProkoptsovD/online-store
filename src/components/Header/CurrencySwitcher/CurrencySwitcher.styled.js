import styled from "styled-components";
import IconButton from "../../common/IconButton";
import TextButton from "../../common/TextButton";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;

    width: ${props => props.theme.sizes.actionBar.btn.w};
    height: ${props => props.theme.sizes.actionBar.btn.h};

    padding: 0;
`;

export const DropdownList = styled.ul`
    position: absolute;
    left: calc(-1 * ${props => props.theme.spacing(5.25)});
    top: calc(100% + ${props => props.theme.spacing(2)});

    width: ${props => props.theme.sizes.currencySwitcher.list.width};
    background-color: ${({ theme }) => theme.colors.light['100']};
    box-shadow: ${props => props.theme.shadows.v1}
`;

export const ListItem = styled.li`
`;

//====================== switcher button =================//

export const OpenCloseSwitcherBtn = styled(IconButton)`
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    font-family: inherit;
    font-weight: ${props => props.theme.typography.fontWeight['500']};
    font-size: ${props => props.theme.typography.fontSize['500']};
    text-align: center;

    & svg {
        width:  ${props => props.theme.sizes.currencySwitcher.arrow.w};
        height:  ${props => props.theme.sizes.currencySwitcher.arrow.h};

        margin-top:  ${props => props.theme.spacing(2)};

        transform: ${props => props.isOpened ? 'rotate(90deg)' : 'rotate(270deg)'};
        transition: ${props => props.theme.setTransition('fast', 'transform')};
    }
`;

export const ActualCurrency = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

export const CurrencySellectionBtn = styled(TextButton)`
    width: 100%;
    height: 100%;

    padding: 17px 17px 11px 17px;;

    font-weight: ${props => props.theme.typography.fontWeight['500']};
    font-size: ${props => props.theme.typography.fontSize['500']};

    cursor: pointer;
    transition: ${props => props.theme.setTransition(null, 'background-color')};

    &:hover, &:active {
        background-color: ${props => props.theme.colors.neutral['500']};
    }
`;