/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBO298MBQcznVg_WoQfo8to4uQa-b3XQCk',
	authDomain: 'gtu-website.firebaseapp.com',
	projectId: 'gtu-website',
	storageBucket: 'gtu-website.appspot.com',
	messagingSenderId: '657422097548',
	appId: '1:657422097548:web:455f4798c05ef405a8afa9',
	measurementId: 'G-NM1YGN3KMS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
