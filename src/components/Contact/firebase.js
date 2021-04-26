import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4YLYZWDIxlY3LJug0pYnLOTFBUadB2X4",
    authDomain: "portfolio-contact-me-30915.firebaseapp.com",
    databaseURL: "https://portfolio-contact-me-30915-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-me-30915",
    storageBucket: "portfolio-contact-me-30915.appspot.com",
    messagingSenderId: "342227111473",
    appId: "1:342227111473:web:c1151997c1bda2bc0a8f10"
  });

  var database = firebaseApp.firestore();

  export { database };

