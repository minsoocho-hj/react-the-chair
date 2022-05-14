import React from 'react';

import styles from './card.module.css';
const Card = () => {
	return (
		<div className={styles.card}>
			<img
				src='https://www.eamesoffice.com/wp-content/uploads/2014/03/Jim-Sugar_1.jpg'
				alt=''
				className={styles.img}
			/>
			<div className={styles.infos}>
				<div>
					<h3 className={styles.title}>Title - Designer, year</h3>
				</div>
				<h3 className={styles.brand}>brand</h3>
				<p className={styles.desc}>Description</p>
			</div>
		</div>
	);
};

export default Card;
