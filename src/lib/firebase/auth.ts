import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { app } from "@/lib/firebase/index";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const firebaseAuth = {
  login: (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password),

  register: (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password),

  logout: () => signOut(auth),

  googleLogin: () => signInWithPopup(auth, googleProvider),

  resetPassword: (email: string) => sendPasswordResetEmail(auth, email),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAuthStateChanged: (callback: (user: any) => void) =>
    onAuthStateChanged(auth, callback),
};
