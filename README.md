

# THE CHAIR 🪑
### NOT JUST ANOTHER CHAIR
DEMO  : https://the-chair.netlify.app/



<img width="1439" alt="Screen Shot 2022-05-17 at 6 23 13 PM" src="https://user-images.githubusercontent.com/71766604/168877578-f388fb70-b1e9-4f12-9b89-10b5be1de301.png">    

<img width="1440" alt="Screen Shot 2022-05-17 at 6 29 24 PM" src="https://user-images.githubusercontent.com/71766604/168877725-4a5886de-9114-4e75-87f0-3dd6a4ec5f07.png">


In the project directory, you can run:

> yarn start

## 💪 Tech stacks 
- <strong>React.js</strong>
- <strong>Cloudinary</strong> for image uploading
- <strong>Firebase</strong>(Authentication, Realtime database)
- <strong>JavaScript</strong>
- <strong>postCSS</strong>
- <strong>Deploy with netlify.</strong>
- Bootstrap, 


## features
###  1. Router
- react-router-dom@6
- '/' (homepage) 
- '/maker' (edit page)
- redirect to '/maker' page when user Sign In.
- redirect to '/' (homeopage) when user Logged out.
- User only can access main page when logged out. 

   
###  2. Firebase Google Authentication
- https://firebase.google.com/docs/auth/web/google-signin
- User can signin with Google Authentication.
- handle user data through data.user.uid firebase.
- Set an authentication state observer and get user data

###  3. Firebase Realtime database
- When a user successfully signs in, can get information about the user in the observer.
 
###  4. Set network module aside as class 📦 
     
     - In order to keep MVC principal, removed network logic in React component.
     - Dependency injection
       (To avoid unnecessary networking while taking a unit test, later on, inject mock class when its need test)
     
     
<img width="280" alt="image" src="https://user-images.githubusercontent.com/71766604/168878463-ae68ccab-d4d3-4c87-bdf8-05f57b5bc405.png">

- firebase - authentication.js
```javascript
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

```
- firebase realtime-database (Save/Delete) - card_repository.js
```javascript
import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
	syncCard(userId, onUpdate) {
		const db = getDatabase();
		const query = ref(db, `${userId}/cards`);
		onValue(query, (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => off(query);
	}
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
}

export default CardRepository;


```


- Cloudinary image uploading - image_upload.js
```javascript
class ImageUpload {
	async upload(file) {
		const url = 'https://api.cloudinary.com/v1_1/**cloud_name**/image/upload';
		const formData = new FormData();

		formData.append('file', file);
		formData.append('upload_preset', 'furniture');

		const result = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		return await result.json();
	}
}

export default ImageUpload;

```


index.js

```javascript
const authService = new Authentication();
const imageUploader = new ImageUpload();
const cardRepository = new CardRepository();
 ```
 
 ### 5. Responsive design (Bootstrap grid system) 📲 
 
 breakpoint @media (min-width: 992px)
 <table align="center">
  <tr>
	        <td> <img width="350" alt="Screen Shot 2022-05-17 at 6 31 36 PM" src="https://user-images.githubusercontent.com/71766604/168878994-b0e2a345-5c7d-4603-b8a4-61ce6fd9baff.png">
</td>
    <td> <img width="350" alt="Screen Shot 2022-05-17 at 6 30 59 PM" src="https://user-images.githubusercontent.com/71766604/168878983-51567ea2-41ef-46fa-b900-ed260a4b006f.png">
</td>
   
  </tr>
<td><img width="350" alt="Screen Shot 2022-05-17 at 6 31 11 PM" src="https://user-images.githubusercontent.com/71766604/168879013-d55bd73a-9eaa-4d2f-a92c-363a8dbce36d.png"></td>
 </table>
 






 
 
 
    

## Future improvement plan 📝
- performance improvement
- Polish front-end


## License
This project is licensed under the MIT License.
