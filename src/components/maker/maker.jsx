import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardList from '../cardlist/cardlist';
import Editor from '../editor/editor';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({
	cardRepository,
	authenticate,
	loginState,
	setLoginState,
	ImgFileInput,
}) => {
	const navigate = useNavigate();

	const location = useLocation().state;
	const [userId, setUserId] = useState(location && location.id);
	const [cards, setCards] = useState({});

	const onAdd = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;

			return updated;
		});
		cardRepository.saveCard(userId, card);
	};

	const onDelete = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		cardRepository.removeCard(userId, card);
	};

	useEffect(() => {
		if (!userId) {
			return;
		}
		const stopSync = cardRepository.syncCard(userId, (cards) => {
			setCards(cards);
		});
		return () => stopSync();
	}, [userId]);

	useEffect(() => {
		authenticate.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				navigate('/');
			}
		});
	}, []);

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
