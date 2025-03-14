// seed.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRcUfT07m2Y958-k9lDzvmXv213PeECS8",
  authDomain: "wedding-b92cf.firebaseapp.com",
  projectId: "wedding-b92cf",
  storageBucket: "wedding-b92cf.firebasestorage.app",
  messagingSenderId: "967167297528",
  appId: "1:967167297528:web:a6389dd1d2bf2de39e380d",
  measurementId: "G-R70TMBF01C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const users = [
  // user mẫu
  // {
  //   name: "Thanh và người thương",
  //   isPublicMessage: false,
  //   message: null,
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  //   guestBy: null,
  // },
];

const seedDatabase = async () => {
  const userCollection = collection(db, "user");

  for (const user of users) {
    await addDoc(userCollection, user);
    console.log(`User ${user.name} added`);
  }

  console.log("All seed data added!");
};

seedDatabase()
  .then(() => {
    console.log("Seeding completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error adding documents: ", error);
    process.exit(1);
  });