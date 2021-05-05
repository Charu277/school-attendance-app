import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAff-1_cgIIqgNwp8RjzuKsV7qJJjUlWlI',
  authDomain: 'school-attendance-7a736.firebaseapp.com',
  databaseURL: 'https://school-attendance-7a736-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-7a736',
  storageBucket: 'school-attendance-7a736.appspot.com',
  messagingSenderId: '185663344278',
  appId: '1:185663344278:web:d45998848486b9730bfcb7',
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();