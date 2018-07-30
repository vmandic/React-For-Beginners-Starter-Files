import Rebase from 're-base';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;