import React from 'react';
import CardList from '../cardlist/cardlist';
import Editor from '../editor/editor';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authenticate, loginState, setLoginState }) => {
	return (
		<>
			<div className={styles.maker}>
				<Header
					authenticate={authenticate}
					loginState={loginState}
					setLoginState={setLoginState}
				/>
				<section className={styles.section}>
					<Editor />
					<CardList />
				</section>
			</div>
		</>
	);
};

export default Maker;
