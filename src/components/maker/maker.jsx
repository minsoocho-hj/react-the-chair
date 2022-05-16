import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../cardlist/cardlist';
import Editor from '../editor/editor';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authenticate, loginState, setLoginState, ImgFileInput }) => {
	const [userId, setUserId] = useState();
	const [cards, setCards] = useState({});

	const onAdd = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			console.log(updated);
			return updated;
		});
	};

	const onDelete = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};

	const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!userId) {
	// 		navigate('/');
	// 	}
	// }, [userId]);

	useEffect(() => {
		authenticate.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				navigate('/');
			}
		});
	});

	return (
		<>
			<div className={styles.maker}>
				<Header
					authenticate={authenticate}
					loginState={loginState}
					setLoginState={setLoginState}
				/>
				<section className={styles.section}>
					<Editor ImgFileInput={ImgFileInput} onAdd={onAdd} cards={cards} />
					<CardList cards={cards} onDelete={onDelete} />
				</section>
			</div>
		</>
	);
};

export default Maker;
