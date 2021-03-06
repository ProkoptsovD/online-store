import { Component, createRef } from "react";
import { connect } from "react-redux";
import { DropdownList, ListItem, CurrencySellectionBtn, Wrapper, OpenCloseSwitcherBtn, ActualCurrency } from "./CurrencySwitcher.styled";
import { switchActualCurrency, updateActualCurrencyInCart, sumTotalPrice, openCurrencyList, closeCurrencyList} from '../../../redux/actions/actions'
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import storage from '../../../services/storage-api';


class CurrencySwitcher extends Component {
    static defaultProps = {
        isOpened: false,
        currencyList: [{}],
        actualCurrency: 0,
    }
    componentDidMount () {
        const { updateCurrencyInCart, actualCurrency } = this.props;
        updateCurrencyInCart(actualCurrency);
    }
    componentDidUpdate() {
        const { isOpened } = this.props;
        if (isOpened) {
            window.addEventListener('keydown', this.handleEscapeKeyDown);
            window.addEventListener('click', this.handleOutsideCurrencySwitcherClick);
            return;
        }
        if (!isOpened) {
            window.removeEventListener('keydown', this.handleEscapeKeyDown);
            window.removeEventListener('click', this.handleOutsideCurrencySwitcherClick);
            return;
        }
    }
    handleEscapeKeyDown = (e) => {
        const { close } = this.props;
        const isEscapeKeyDown = e.key === 'Escape';
        console.log(e);

        return isEscapeKeyDown && close();
    }
    handleOutsideCurrencySwitcherClick = (e) => {
        const { close } = this.props;
        const isClickOutsideCurencySwitcher = e.target.parentElement.parentElement.id === 'currency-switcher'
                                                || e.target.parentElement.id === 'currency-switcher'
                                                || e.target.id === 'currency-switcher';
        
        return !isClickOutsideCurencySwitcher && close();                                
    }
    renderCurrencies = () => {
        const { currencyList } = this.props;
        
        return currencyList.map(({ symbol, label }, idx) => 
                <ListItem key={label}>
                    <CurrencySellectionBtn
                        id={'currencySellectionBtn'}
                        value={idx}
                        onClick={this.handleSelectionBtnClick}
                    >
                        {`${symbol} ${label}`}
                    </CurrencySellectionBtn>
                </ListItem>
            );
    }
    handleOpenCloseBtnClick = () => {
        const { isOpened, open, close } = this.props;

        isOpened ? close() : open();
    }
    handleSelectionBtnClick = (e) => {
        const { switchActualCurrency, updateCurrencyInCart, sumTotalPriceInCart, actualCurrency, close } = this.props;
        const picked = +e.currentTarget.value;
        const isNewCurrency = picked !== actualCurrency;

        if (isNewCurrency) {
            switchActualCurrency(picked);
            updateCurrencyInCart(picked);
            sumTotalPriceInCart();
            storage.save('currency', picked);
        }

        close();
    }
    render() {
        const { currencyList, actualCurrency, isOpened } = this.props;
        const symbol = currencyList[actualCurrency]?.symbol

        return (        
            <Wrapper id="currency-switcher">
                <OpenCloseSwitcherBtn
                    isOpened={isOpened}
                    onClick={this.handleOpenCloseBtnClick}
                >
                    <ActualCurrency>
                        {symbol}
                    </ActualCurrency>
                    <Icons id="chevron"/>
                </OpenCloseSwitcherBtn>
                {
                    isOpened &&  <DropdownList>
                                    {this.renderCurrencies()}
                                </DropdownList>
                }
            </Wrapper>
        )
    }
}

CurrencySwitcher.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    currencyList: PropTypes.arrayOf(PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })),
    actualCurrency: PropTypes.number.isRequired,
    switchActualCurrency: PropTypes.func,
    open: PropTypes.func,
    close: PropTypes.func,
}

const mapStateToProps = (state) => ({
    currencyList: state.initial.currencies,
    actualCurrency: state.currency.actualCurrency.index,
    isOpened: state.currency.isOpened,
});

const mapDispatchToProps = (dispatch) => ({
    switchActualCurrency: (currencyToSet) => {
        dispatch(switchActualCurrency(currencyToSet));
    },
    open: () => {
        dispatch(openCurrencyList());
    },
    close: () => {
        dispatch(closeCurrencyList());
    },
    updateCurrencyInCart: (currency) => {
        dispatch(updateActualCurrencyInCart(currency));
    },
    sumTotalPriceInCart: () => {
        dispatch(sumTotalPrice());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);