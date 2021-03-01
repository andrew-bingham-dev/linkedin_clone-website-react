import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAB0vaZvcB7Sgq5gWskNC6lIj1aEVutckM',
	authDomain: 'linkedin-clone-12f26.firebaseapp.com',
	projectId: 'linkedin-clone-12f26',
	storageBucket: 'linkedin-clone-12f26.appspot.com',
	messagingSenderId: '821334971951',
	appId: '1:821334971951:web:2411d442fb4e17443d58da',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
