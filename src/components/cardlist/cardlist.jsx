import React, { useEffect, useRef } from 'react';
import Card from '../card/card';
import styles from './cardlist.module.css';

const CardList = ({ cards, onDelete }) => {
	const cardsRef = useRef();

	const focusToCurrentCard = () => {
		if (cardsRef.current.lastChild === null) {
			return;
		} else {
			const lastChild = cardsRef.current.lastChild;
			lastChild?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		focusToCurrentCard();
	}, [cards]);

	return (
		<div className={styles.cards} ref={cardsRef}>
			{Object.keys(cards).length > 0 ? (
				Object.keys(cards).map((key) => (
					<Card card={cards[key]} key={key} onDelete={onDelete} />
				))
			) : (
				<div className={styles.nodata}>Add your chair.</div>
			)}
		</div>
	);
};

export default CardList;
