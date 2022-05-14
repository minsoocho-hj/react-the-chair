import firebaseApp from './firebaseConfig';
import {
	getAuth,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';

class Authentication {
	login() {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		return signInWithPopup(auth, provider);
	}

	logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	onAuthChange(onChangeUser) {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			onChangeUser(user);
		});
	}
}

export default Authentication;
