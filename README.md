

# THE CHAIR 🪑
### NOT JUST ANOTHER CHAIR
DEMO  : https://furniture-archive.netlify.app/
<table align="center">
  <tr>
    <td><img width="1000" alt="Screen Shot 2022-05-12 at 6 56 03 PM" src="https://user-images.githubusercontent.com/71766604/168140392-88646a73-edc4-4d22-8dbd-c67398044009.png">
 </td>
    <td> <img width="1000" alt="Screen Shot 2022-05-12 at 6 55 50 PM" src="https://user-images.githubusercontent.com/71766604/168140418-d0cd523f-1e39-4004-8cc1-812981f2b0f2.png">
</td>
  </tr>
</table>

In the project directory, you can run:

> yarn start

## 💪 Tech stacks 
- <strong>React.js</strong>
- <strong>Cloudinary</strong> for image uploading
- <strong>Firebase</strong>(Authenticatio, Realtime database)
- <strong>JavaScript</strong>
- <strong>postCSS</strong>
- <strong>Deploy with netlify.</strong>
- fontawesome, bootstrap, 



## features
###  1. Router
- react-router-dom@6
- '/' (homepage) 
- '/maker' (edit page)
- redirect to '/maker' page when user Sign In.
- redirect to '/' (homeopage) when user Logged out.

   
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
     
     
<img width="182" alt="image" src="https://user-images.githubusercontent.com/71766604/168264157-52c8a09d-3245-4234-be4b-2f3cf1813cde.png">

- firebase authentication
```javascript
import firebaseApp from './firebaseConfig';
import firebase from 'firebase';

class Authentication {
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
		return firebaseApp.auth().signInWithPopup(authProvider);
	}

	logout() {
		return firebase.auth().signOut();
	}

	onAuthChange(onUserChanged) {
		firebaseApp.auth().onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}
}

export default Authentication;

```
- firebase realtime-database (Sava/Delete)
```javascript
import firebaseApp from './firebaseConfig';

class CardRepository {
	syncCard(userId, onUpdate) {
		const ref = firebaseApp.database().ref(`${userId}/cards/`);
		ref.on('value', (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => ref.off();
	}
	saveCard(userId, card) {
		firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
	}

	removeCard(userId, card) {
		firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
	}
}

export default CardRepository;

```
- Cloudinary image uploading
```javascript
class ImageUpload {
	async upload(file) {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'furniture');

		const result = await fetch(
			`https://api.cloudinary.com/v1_1/**cloudname**/image/upload`,
			{
				method: 'POST',
				body: data,
			}
		);
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
    <td><img width="300" alt="image" src="https://user-images.githubusercontent.com/71766604/168141659-35ef1425-5f3e-4632-9a25-d9d5e75c5247.png">
</td>
         <td><img width="330" alt="image" src="https://user-images.githubusercontent.com/71766604/168141793-51c7e434-dca1-488e-8d9b-df28d7a76197.png">
</td>
  </tr>
 </table>
    

## Future improvement plan 📝
- performance improvement
- Polish front-end


## License
This project is licensed under the MIT License.
