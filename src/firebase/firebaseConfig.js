// The core Firebase JS SDK is always required and must be listed first
import firebase from 'firebase/app';

// SDKs for Firebase products that we want to use.
import 'firebase/auth';
import 'firebase/firestore';

// Web app's Firebase configuration.
var firebaseConfig =
{
    apiKey: process.env.REACT_APP_EM_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_EM_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_EM_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_EM_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_EM_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_EM_FIREBASE_APP_ID
};

// Initializing Firebase.
firebase.initializeApp( firebaseConfig );

// Connection to the firestore authentication module.
const auth = firebase.auth();

// Connection to the firestore database.
const db = firebase.firestore();

export { auth, db };