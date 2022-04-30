import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD0FO8SBiPRmQGAoPR0hGDRenZBUL5EsfU',
  authDomain: 'ridelo-india.firebaseapp.com',
  projectId: 'ridelo-india',
  storageBucket: 'ridelo-india.appspot.com',
  messagingSenderId: '380737314284',
  appId: '1:380737314284:web:77340dae249f57c17434c9',
  measurementId: 'G-RQJ8R06JM9',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()

export default firebaseApp
