import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

let firebaseApp: FirebaseApp;
const emulator = () => import.meta.env.VITE_USE_FIREBASE_EMULATOR;

export const setupFirebase = () => {
  try {
    firebaseApp = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
      appId: import.meta.env.VITE_FIREBASE_APPID,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error({ error });
  }
};

let auth: Auth;
let firestoreInstance: ReturnType<typeof getFirestore>;
let storage: ReturnType<typeof getStorage>;

export const useAuth = () => {
  auth = getAuth(firebaseApp);
  if (emulator()) {
    connectAuthEmulator(auth, "http://localhost:9099");
  }
  return auth;
};

export const firestore = () => {
  if (!firestoreInstance) {
    firestoreInstance = getFirestore();
    if (emulator()) {
      connectFirestoreEmulator(firestoreInstance, "localhost", 8080);
    }
  }
  return firestoreInstance;
};

export const useStorage = () => {
  if (!storage) {
    storage = getStorage();
    if (emulator()) {
      connectStorageEmulator(storage, "localhost", 9199);
    }
  }
  return storage;
};
