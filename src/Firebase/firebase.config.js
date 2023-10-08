// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMueZK3IFM3WvuQba2gQd8yMvkFHgOb_A",
  authDomain: "react-dragon-news-auth-52291.firebaseapp.com",
  projectId: "react-dragon-news-auth-52291",
  storageBucket: "react-dragon-news-auth-52291.appspot.com",
  messagingSenderId: "1009198944711",
  appId: "1:1009198944711:web:84083dcdee62dcbe0149e2",
  measurementId: "G-R1NZ7EG99J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;