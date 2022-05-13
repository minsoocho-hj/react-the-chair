import React from 'react';
import ButtonUnderLine from '../button/ButtonUnderLine';
import styles from './header.module.css';

const Header = ({ onAuth }) => {
	return (
		<div className={styles.header}>
			<h1 className={`${styles.title} ${styles.rotate} `}>The chair</h1>
			<ButtonUnderLine text='Login' onAuth={onAuth} />
		</div>
	);
};

export default Header;
