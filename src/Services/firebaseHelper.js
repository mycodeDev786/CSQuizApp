import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfs7_3_fScwQ4V2zi6LkQHTVoFS0Mh9Vg",
  authDomain: "quizapp-8a936.firebaseapp.com",
  projectId: "quizapp-8a936",
  storageBucket: "quizapp-8a936.appspot.com",
  messagingSenderId: "227136639628",
  appId: "1:227136639628:web:b132205ed6fdc542d0a1a9",
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
