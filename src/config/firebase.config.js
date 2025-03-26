import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // Import GoogleAuthProvider
import { getFirestore } from 'firebase/firestore';

// Firebase configuration using environment variables
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app (if not already initialized)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
console.log('Firebase App Initialized:', app);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize GoogleAuthProvider
const googleAuthProvider = new GoogleAuthProvider();

// Export initialized instances for use in other parts of the app
export { app, auth, db, googleAuthProvider };  // Export googleAuthProvider as well
