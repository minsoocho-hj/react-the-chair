import React from 'react';

import styles from './card.module.css';
const Card = ({ card, onDelete }) => {
	return (
		<div className={styles.card}>
			<img src={card.fileURL} alt='' className={styles.img} />
			<div className={styles.infos}>
				<button className={styles.delete} onClick={() => onDelete(card)}>
					X
				</button>
				<h3 className={styles.title}>{card.title}</h3>
				<div className={styles.detail}>
					<span className={styles.span}>
						Brand: {card.brand} <br />
					</span>
					<span className={styles.span}>
						Designer: {card.designer} <br />
					</span>
					<span className={styles.span}>Year: {card.year}</span>
				</div>
				<p className={styles.desc}>{card.desc}</p>
			</div>
		</div>
	);
};

export default Card;
