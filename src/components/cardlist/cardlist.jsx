import React, { useEffect } from 'react';
import Card from '../card/card';
import styles from './cardlist.module.css';

const CardList = ({ cards, onDelete }) => {
	useEffect(() => {});
	return (
		<div className={styles.cards}>
			{Object.keys(cards).length > 0 ? (
				Object.keys(cards).map((key) => (
					<Card card={cards[key]} key={key} onDelete={onDelete} />
				))
			) : (
				<div>No data</div>
			)}
		</div>
	);
};

export default CardList;
