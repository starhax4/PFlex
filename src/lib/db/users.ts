import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { firebaseAuth } from "../firebase/auth";
import { User } from "firebase/auth";




interface UserData {
  userId: string;
  name: string;
  email: string;
  profilePicture: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  // imageURL : string
}

// Add a new user
export const addUser = async (userData: UserData) => {
  const usersRef = collection(db, "users");
  return await addDoc(usersRef, userData);
};

// Add new user to DB on SignUp
export const addNewUserToDB = async () => {
  const User = (await firebaseAuth.getUser()) as User;

  const user: UserData = {
    userId: User.uid,
    name: User.displayName ?? "Anonymous",
    email: User.email ?? "",
    profilePicture: User.photoURL ?? "",
    role: "user",
    createdAt: User.metadata.creationTime ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await addUser(user);
};

//update Name
export const updateName = async (name: string,userId : string) => {
  try {
    const docRef = doc(db, "users", userId);
    await updateDoc(docRef, {
      name: name,
    });
  } catch (error) {
    console.log("Error :", error);
  }
};
