import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout/MainLayout';

//import routes
import Home from './components/pages/Home/HomePage';
import Questions from './components/pages/Questions/QuestionsPage';
import Contact from './components/pages/Contact/ContactPage';
import TermsOfUse from './components/pages/TermsOfUse/TerminsOfUsePage';
import Cart from './components/pages/Cart/CartPage';
import SingleItem from './components/pages/SingleItem/SingleItemPage';
import OrderSummary from './components/pages/OrderSummary/OrderSummaryPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {

	render() {

		return (
			<MainLayout >
				<Switch>

					<Route exact path='/' component={Home} />
					<Route exact path='/faq' component={Questions} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/termsofuse' component={TermsOfUse} />
					<Route exact path='/items/:id' component={SingleItem} />
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/summary' component={OrderSummary} />
					<Route component={NotFound} />

				</Switch>
			</MainLayout>
		);
	}
};

export default App;
