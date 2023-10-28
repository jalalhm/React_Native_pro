import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1HnIUuncyYA3GWxGH-tpfGVsPXe9ztjY",
  authDomain: "mobile-a5c98.firebaseapp.com",
  projectId: "mobile-a5c98",
  storageBucket: "mobile-a5c98.appspot.com",
  messagingSenderId: "199188486141",
  appId: "1:199188486141:web:196429608baded7acceb94",
  measurementId: "G-K60L9R6KS0"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };