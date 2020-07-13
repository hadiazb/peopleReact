import React, { Fragment } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Footer } from './Components/Footer/index';

export const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Footer />
		</Fragment>
	);
};
