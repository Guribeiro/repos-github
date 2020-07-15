import React, { Fragment } from 'react';
import Routes from './routes';
import GlobalStyled from './styles/global';

function App() {
	return (
		<Fragment>
			<GlobalStyled />
			<Routes />
		</Fragment>
	);
}

export default App;
