// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbZovDSuDidRwSu6wzF6vlV9L3hcC9hRA",
    authDomain: "task-management-app-73e3a.firebaseapp.com",
    projectId: "task-management-app-73e3a",
    storageBucket: "task-management-app-73e3a.firebasestorage.app",
    messagingSenderId: "613802192303",
    appId: "1:613802192303:web:81b0444de6cffe37cb535a",
    databaseURL:'https://task-management-app-73e3a-default-rtdb.firebaseio.com',
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);