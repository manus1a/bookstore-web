// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || 'AIzaSyCe52-J0LGDpmtZguuVRCNb_tmmkBkugBg',
  authDomain: import.meta.env.VITE_Auth_Domain || 'book-store-fe8e7.web.app',
  projectId: import.meta.env.VITE_PROJECT_ID || 'book-store-fe8e7',
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || 'book-store-fe8e7.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID || '899675847744',
  appId: import.meta.env.VITE_APPID || '1:899675847744:web:49e1766fc6a58165e4b3a5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default auth