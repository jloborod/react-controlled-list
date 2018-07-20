import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/list';

import './styles.css';

function App() {
	return (
		<div className="App">
			<List />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
