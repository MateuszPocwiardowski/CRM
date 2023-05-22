import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCP3NAml-M7RtKmsQRZ2NgDCuEF06jwLEE',
  authDomain: 'mp-crm-5bac1.firebaseapp.com',
  projectId: 'mp-crm-5bac1'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)

export { auth, db }
