import firebase from "firebase/app;";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "notes-5ef2c.firebaseapp.com",
  projectId: "notes-5ef2c",
  storageBucket: "notes-5ef2c.appspot.com",
  messagingSenderId: "654032296536",
  appId: "1:654032296536:web:960f39131aab6ffa7dc82d",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
