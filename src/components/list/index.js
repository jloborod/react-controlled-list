import React from 'react';
import PropTypes from 'prop-types';

import initialState from './state';
import Item from '../item';

import style from './style.css';

const actions = {
	init() {
		return initialState;
	},
	incrementItem(state, item) {
		const total = state.total + 1;
		const items = state.items.reduce((acc, curr) => {
			return [
				...acc,
				{
					...curr,
					value: item.position === curr.position ? curr.value + 1 : curr.value,
					total,
				},
			];
		}, []);

		return {
			total,
			items,
		};
	},
};

export default class List extends React.Component {
	state = actions.init();

	handleIncrementItem = item => {
		this.setState(() => actions.incrementItem(this.state, item));
	};

	render() {
		return (
			<div className="list">
				<h2>Total: {this.state.total}</h2>
				<ul>
					{this.state.items.map(item => (
						<Item
							key={item.position}
							item={item}
							onIncrement={this.handleIncrementItem}
						/>
					))}
				</ul>
			</div>
		);
	}
}
