import firebase from "firebase";

const firebaseConfig = {
  apiKey: "pk_test_51HYoYWFcQTuAeGI55BYPcUjxUMWKqKn4pNwOZZCkeXKJpgeQv2KMLC0lE9Ag11O5vcXkqrIpCdKn4htlkugSSB3h00bn8YaCZF",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge-4b2b2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
