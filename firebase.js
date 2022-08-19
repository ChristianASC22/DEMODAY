import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


const firebaseConfig={
  apiKey: "AIzaSyDgKqyhHe1etpGUUZ9PEYIpkcB1enH-ufs",
  authDomain: "fir-project-c0c08.firebaseapp.com",
  databaseURL: "https://fir-project-c0c08-default-rtdb.firebaseio.com",
  projectId: "fir-project-c0c08",
  storageBucket: "fir-project-c0c08.appspot.com",
  messagingSenderId: "828492574221",
  appId: "1:828492574221:web:84c33867ad361508406f44"
}


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, push, set, onValue };