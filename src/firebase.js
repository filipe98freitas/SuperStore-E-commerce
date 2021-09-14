import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2oQfHj8ZkRIKQqF8x2XzkLxUBqUrSoyk",
  authDomain: "e-commerce-8df12.firebaseapp.com",
  projectId: "e-commerce-8df12",
  storageBucket: "e-commerce-8df12.appspot.com",
  messagingSenderId: "163848518411",
  appId: "1:163848518411:web:9c50c8712d1023a9f1000e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
