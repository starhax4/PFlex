import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  orderBy,
  // DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import { firebaseAuth } from "../firebase/auth";

// import { Site } from "@/types/db/sites";

// Global variable to hold the current site ID
export let currentSiteId: string | null;

// Add new Site for site creation
export const addNewSite = async (siteData: {
  title: string;
  tagline: string;
  subdomain: string;
  published: boolean;
}) => {
  try {
    const user = await firebaseAuth.getUser();
    const docRef = await addDoc(collection(db, "sites"), {
      title: siteData.title,
      tagline: siteData.tagline ?? "My Portfolio",
      subdomain: "https://" + siteData.subdomain + ".pflex.hamzaislam.tech",
      userId: user?.uid,
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    currentSiteId = docRef.id; // Store the siteId globally
    console.log("Site created successfully with ID:", currentSiteId);
  } catch (error) {
    console.error("Error creating site:", error);
    throw new Error("Failed to create site.");
  }
};

// Add person Details to sites
export const addPersonData = async (personData: {
  name: string;
  profession: string;
  bio: string;
  imageUrl: string;
}) => {
  if (!currentSiteId) {
    throw new Error("Site ID not found. Please create a site first.");
  }

  try {
    const docRef = doc(db, "sites", currentSiteId);
    await updateDoc(docRef, {
      person: {
        name: personData.name,
        profession: personData.profession,
        bio: personData.bio,
        imageUrl: personData.imageUrl,
      },
    });
    console.log("Person data added successfully.");
  } catch (error) {
    console.error("Error adding person data:", error);
    throw new Error("Failed to add person data.");
  }
};

// Add MetaData to sites
export const addMetaData = async (metaData: {
  title: string;
  description: string;
  iconUrl: string;
}) => {
  if (!currentSiteId) {
    throw new Error("Site ID not found. Please create a site first.");
  }

  try {
    const docRef = doc(db, "sites", currentSiteId);
    await updateDoc(docRef, {
      metadata: {
        title: metaData.title,
        description: metaData.description,
        iconUrl: metaData.iconUrl,
      },
    });
  } catch (error) {
    console.log("Error :", error);
  }
};

//Checks if subdomain is unique
export const isSubdomainUnique = async (
  subdomain: string,
): Promise<boolean> => {
  const sitesRef = collection(db, "sites");
  const q = query(sitesRef, where("subdomain", "==", subdomain));
  const snapshot = await getDocs(q);
  return snapshot.empty; // Returns true if no site with the subdomain exists
};

//Read created site
export const getSite = async (siteId: string): Promise<object | undefined> => {
  const docRef = doc(db, "sites", siteId);
  // const q = query(docRef,where("siteId","==",siteId))
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return snapshot.data();
  }
  return undefined;
};

//Read all sites of the user
export const getAllSites = async (): Promise<object[]> => {
  try {
    const user = await firebaseAuth.getUser();
    if (!user) {
      throw new Error("No authenticated user found");
    }

    const sitesRef = collection(db, "sites");
    
    const q = query(
      sitesRef,
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const sites = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return sites;
  } catch (error) {
    console.error("Error fetching sites:", error);
    throw error;
  }
};

// Update site data

// Delete site
