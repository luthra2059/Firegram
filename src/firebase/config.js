import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDqGApY1k5OIvKvsZAsnvhpG9Sr5S3UAjQ",
    authDomain: "firegram-98361.firebaseapp.com",
    databaseURL: "https://firegram-98361.firebaseio.com",
    projectId: "firegram-98361",
    storageBucket: "firegram-98361.appspot.com",
    messagingSenderId: "240711358844",
    appId: "1:240711358844:web:1bfa73b2781738567b2cf9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectFirestore, projectStorage, timestamp};
