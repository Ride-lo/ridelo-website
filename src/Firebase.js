import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyD0FO8SBiPRmQGAoPR0hGDRenZBUL5EsfU',
  authDomain: 'ridelo-india.firebaseapp.com',
  projectId: 'ridelo-india',
  storageBucket: 'ridelo-india.appspot.com',
  messagingSenderId: '380737314284',
  appId: '1:380737314284:web:77340dae249f57c17434c9',
  measurementId: 'G-RQJ8R06JM9',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { db }
