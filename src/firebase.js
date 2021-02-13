import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ6fmPUHoFeKQxH18S155RqTQmR2Iq170',
  authDomain: 'netflix-clone-b69f2.firebaseapp.com',
  projectId: 'netflix-clone-b69f2',
  storageBucket: 'netflix-clone-b69f2.appspot.com',
  messagingSenderId: '192245897235',
  appId: '1:192245897235:web:2c44f3d42e046be260c7e6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
