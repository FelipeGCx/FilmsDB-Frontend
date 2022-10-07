import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export const app = firebase.initializeApp({
  projectId: "films-a2d18",
  appId: "1:261660134286:web:0c3fdaa27c7ae43ac272df",
  storageBucket: "films-a2d18.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyDcKlfVPU5iRpmCOl3ndolSqLInHzBr8Ng",
  authDomain: "films-a2d18.firebaseapp.com",
  messagingSenderId: "261660134286",
});
