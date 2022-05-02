import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC6P-bkVkdzQ5pD3aJNEfZ9r0KkwbIogTc',
  authDomain: 'ridelo-database.firebaseapp.com',
  projectId: 'ridelo-database',
  storageBucket: 'ridelo-database.appspot.com',
  messagingSenderId: '228797403338',
  appId: '1:228797403338:web:3cb736596e9f820368a433',
  measurementId: 'G-CB6GMB2EL1',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()

export default firebaseApp
