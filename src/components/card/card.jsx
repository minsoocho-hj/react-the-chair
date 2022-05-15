import React from 'react';

import styles from './card.module.css';
const Card = ({ card, onDelete }) => {
	return (
		<div className={styles.card}>
			<img
				src='https://www.eamesoffice.com/wp-content/uploads/2014/03/Jim-Sugar_1.jpg'
				alt=''
				className={styles.img}
			/>
			<div className={styles.infos}>
				<button className={styles.delete} onClick={() => onDelete(card)}>
					X
				</button>
				<div>
					<h3 className={styles.title}>{card.title} - </h3>
					<h4 className={styles.designer}> {card.designer},</h4>
					<h4 className={styles.year}>{card.year}</h4>
				</div>
				<h4 className={styles.brand}>{card.brand}</h4>
				<p className={styles.desc}>{card.desc}</p>
			</div>
		</div>
	);
};

export default Card;
