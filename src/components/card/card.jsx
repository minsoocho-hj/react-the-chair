import styles from './card.module.css';
import { memo } from 'react';
const Card = memo(({ card, onDelete }) => {
	const { title, brand, designer, year, desc, fileURL } = card[2];
	return (
		<div className={styles.card}>
			<img src={fileURL} alt='' className={styles.img} />
			<div className={styles.infos}>
				<button className={styles.delete} onClick={() => onDelete(card[2])}>
					X
				</button>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.detail}>
					<span className={styles.span}>
						Brand: {brand} <br />
					</span>
					<span className={styles.span}>
						Designer: {designer} <br />
					</span>
					<span className={styles.span}>Year: {year}</span>
				</div>
				<p className={styles.desc}>{desc}</p>
			</div>
		</div>
	);
});

export default Card;
