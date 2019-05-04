import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyDwrQUGSruZ5M26ytsuNxzeaGHVTuNBYjk",
  authDomain: "cropchien-c9f68.firebaseapp.com",
  databaseURL: "https://cropchien-c9f68.firebaseio.com",
  projectId: "cropchien-c9f68",
  storageBucket: "cropchien-c9f68.appspot.com",
  messagingSenderId: "650352192566",
  appId: "1:650352192566:web:2286f2d35cdace77"
};

firebase.initializeApp(config);

let db = firebase.firestore();

export default {
  db
};
