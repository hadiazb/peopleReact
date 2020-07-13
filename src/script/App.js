import React, { Fragment } from 'react';
import { GlobalStyle } from '../Styles/GlobalStyle';
import { Footer } from './Components/Footer/index';
import { Header } from './Components/Header/index';
import { Formulary } from './Components/Formulario/index';

export const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<Formulary />
			<Footer />
		</Fragment>
	);
};
