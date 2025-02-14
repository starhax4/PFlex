/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  User,
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

  googleLogin: () => {
    signInWithPopup(auth, googleProvider);
  },

  resetPassword: (email: string) => sendPasswordResetEmail(auth, email),

  onAuthStateChanged: (callback: (user: any) => void) =>
    onAuthStateChanged(auth, callback),

  isNewUser: (): Promise<boolean> => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          resolve(false);
          return;
        }
        const NEW_USER_THRESHOLD_MS = 5000;
        const creationTime =
          user.metadata.creationTime || new Date().toISOString();
        const lastSignInTime =
          user.metadata.lastSignInTime || new Date().toISOString();
        const creationTimeMs = new Date(creationTime).getTime();
        const lastSignInTimeMs = new Date(lastSignInTime).getTime();

        resolve(
          Math.abs(creationTimeMs - lastSignInTimeMs) < NEW_USER_THRESHOLD_MS,
        );
      });
    });
  },

  getUser: (): Promise<User | null> =>  {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          resolve(null);
          return;
        }
        resolve(user);
      });
    });
  },
};
