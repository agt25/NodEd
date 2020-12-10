import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Sidenavbar from './Sidenavbar';

{/* Integrate the Firebase Package */}
const firebase = require('firebase');
require('firebase/firestore');

{/* Firebase configuration */}
{/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */ } 
 
{/* Initialize Firebase */} 

const firebaseConfig = {
  apiKey: "AIzaSyCeGOFdygHJS4lby3dSAQLdqZzsTNEBC6Q",
  authDomain: "noded-55de3.firebaseapp.com",
  databaseURL: "https://noded-55de3.firebaseio.com",
  projectId: "noded-55de3",
  storageBucket: "noded-55de3.appspot.com",
  messagingSenderId: "505574580577",
  appId: "1:505574580577:web:6fd9128b9e0356170a6520",
  measurementId: "G-LWF1HGC8ZJ"
};

{/* Add default.initializeApp,
firebase.initializeApp returns error */}
firebase.default.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  
  document.getElementById('noded-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
