import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1wciYXqO94jERRcDooud5eRwa4KIpOj8",
  authDomain: "ai-image-1e941.firebaseapp.com",
  projectId: "ai-image-1e941",
  storageBucket: "ai-image-1e941.appspot.com",
  messagingSenderId: "799634259345",
  appId: "1:799634259345:web:c9b2ac7457937236e42e30",
  measurementId: "G-Z05DKY50V2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 


