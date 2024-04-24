import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "supercom-ed793.firebaseapp.com",
  projectId: "supercom-ed793",
  storageBucket: "supercom-ed793.appspot.com",
  messagingSenderId: "881748497905",
  appId: "1:881748497905:web:ed330bd8ea85412b92a050",
  measurementId: "G-6JNTWDJYJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;