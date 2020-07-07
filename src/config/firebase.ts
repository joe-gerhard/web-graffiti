import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
apiKey: "AIzaSyB4dacp3I3tmFwiyKg65oQoZgyLSZimOJ0",
authDomain: "web-graffiti.firebaseapp.com",
databaseURL: "https://web-graffiti.firebaseio.com",
projectId: "web-graffiti",
storageBucket: "web-graffiti.appspot.com",
messagingSenderId: "24760120833",
appId: "1:24760120833:web:eb4e14c8c95f1fec917200",
measurementId: "G-Y8M2S1MB4S"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore();

export default firebase;