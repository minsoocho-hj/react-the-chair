import React from 'react';
import styles from './ButtonUnderLine.module.css';

const ButtonUnderLine = ({ text }) => (
	<button className={styles.underline}>{text}</button>
);

export default ButtonUnderLine;
