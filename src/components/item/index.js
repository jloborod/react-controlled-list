import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Item = ({ item, onIncrement }) => (
	<li className="item">
		<span>
			Position: {item.position} / Value: {item.value} / Total: {item.total}
		</span>
		<button onClick={() => onIncrement(item)}>Increment Value</button>
	</li>
);

Item.propTypes = {
	item: PropTypes.objectOf(PropTypes.any).isRequired,
	onIncrement: PropTypes.func,
};

Item.defaultProps = {
	onIncrement: () => {},
};

export default Item;
