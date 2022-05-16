import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const navigateState = useNavigate().state;
	const [userId, setUserId] = useState(navigateState && navigateState.id);
	const [cards, setCards] = useState({
		1: {
			id: 1,
			title: 'Example - Stool 60',
			brand: 'artek',
			fileURL:
				'https://res.cloudinary.com/artek/image/upload/w_2614/v1652083179/products/stool-60/Artek_Stool_New-6327957.jpg',
			fileName: 'Stool60',
			designer: 'Alvar aalto',
			year: 1930,
			desc: 'this is stool designed by alvar...',
		},
	});

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
