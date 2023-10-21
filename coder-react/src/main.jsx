import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  "bootstrap/dist/css/bootstrap.min.css" 
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hNpC_iz_eSMpSzA5egVZZ8WtGyLKEFI",
  authDomain: "coder-react-js-2735a.firebaseapp.com",
  projectId: "coder-react-js-2735a",
  storageBucket: "coder-react-js-2735a.appspot.com",
  messagingSenderId: "308562774683",
  appId: "1:308562774683:web:7b8354ccbf7bc52e6c543e"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
