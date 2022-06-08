import { Component, Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initAppThunk } from './redux/thunks/initAppThunk';
import { generateHash } from './helpers/generateHash';
import { ReactComponent as Logo } from './icons/logo.svg';

import Header from './components/Header';
import Navbar from './components/Header/Navbar/';
import Actionbar from './components/Header/Actionbar';
import CurrencySwitcher from './components/Header/CurrencySwitcher';
import Cart from './components/Cart/';
import MiniCartButton from './components/MiniCartButton';
import CategoryPage from './pages/CategoryPage/';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage/';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage/TermsAndConditionsPage';
import Toaster from './components/Toaster/';
import Overlay from './components/Overlay/';
import Alert from './components/common/Alert/Alert';
import storage from './services/storage-api';
import './App.css';
import { clearCartAfterOrderSubmit, setCartDataAfterReload, switchActualCurrency } from './redux/actions/actions';

class App extends Component {
	componentDidMount () {
		const { initApp, setCart, clearCart, setCurrency } = this.props;
		
		initApp();
		storage.load('cart')
						? setCart(storage.load('cart'))
						: clearCart();
		setCurrency(storage.load('currency'));
	}
	renderRoutes = () => {
		const { categories } = this.props;
		
		return categories.map(({ name }) => {
			return (
				<Fragment key={generateHash()}>
					<Route
						path={`/${name}/:id`}
						element={<ProductPage key={name} categoryName={name} />}
					/>
					<Route
						path={`/${name}`}
						element={<CategoryPage key={name} categoryName={name} />}
					/>
				</Fragment>)
		});
	}
	render() {
		const { categories, isOverlayOpened, itemsCount, toastList, showAlert } = this.props;
		const isThereAnyToast = toastList.length !== 0;

		return (
			<>
				<Header>
					<Navbar tabList={categories}/>
					<Logo />
					<Actionbar>
						<CurrencySwitcher />
						<MiniCartButton itemsCount={itemsCount}/>
					</Actionbar>
				</Header>
				<main>
					<Routes>
						{this.renderRoutes()}
						<Route path='/cart/:id' element={<OrderPage />} />
						<Route path='/cart' element={<CartPage title="Cart"/>} />
						<Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
						<Route path='/' element={<Navigate to="/all" replace={true}/>} />
					</Routes>
				</main>
				{
					isThereAnyToast
						? <Toaster toastList={toastList} delay={2000}/>
						: null
				}
				{
					isOverlayOpened ?   <Overlay key='mini-cart' modalType='mini-cart'>
											<Cart
												cartType="mini"
												galleryType="mini"
												optionPickerType="mini"
												quantatyPanelType="mini"
												productCardType="mini"
											/>
										</Overlay>
									: 	null
				}
				{
					showAlert 	? 	<Alert
										to='/'
										controlsText={'Back home'}
									/>
								: 	null
				}
			</>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        categories: state.initial.categories,
        currencies: state.initial.currencies,
        itemsCount: state.cart.itemsTotal,
		isOverlayOpened: state.overlay.isOpened,
		toastList: state.toast.toastList,
		showAlert: state.alert.showAlert,
		cart: state.cart,
    }
}
const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initAppThunk())
    },
	setCart: (cart) => {
		dispatch(setCartDataAfterReload(cart));
	},
	clearCart: () => {
		dispatch(clearCartAfterOrderSubmit());
	},
	setCurrency: (newCurrency) => {
		dispatch(switchActualCurrency(newCurrency));
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
