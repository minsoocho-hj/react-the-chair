import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
import { getAuth } from 'firebase/auth';

class CardRepository {
	saveCard(userId, card) {
		const db = getDatabase();
		set(ref(db, `${userId}/cards/${card.id}`), {
			1: userId,
			2: card,
		});
	}

	removeCard(userId, card) {
		const db = getDatabase();
		const cardRef = ref(db, `${userId}/cards/${card.id}`);
		remove(cardRef);
	}

	syncCard(userId, onUpdate) {
		const db = getDatabase();
		const query = ref(db, `${userId}/cards`);
		onValue(query, (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => off(query);
	}
}

export default CardRepository;
