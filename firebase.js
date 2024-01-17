// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEqoUAi6FdaWMyRENCumnp1ismyow0vY4",
  authDomain: "fir-auth-e65d8.firebaseapp.com",
  projectId: "fir-auth-e65d8",
  storageBucket: "fir-auth-e65d8.appspot.com",
  messagingSenderId: "1017161345323",
  appId: "1:1017161345323:web:8f28126529abbc1acb7d6e"
};

// Initialize Firebase
let app;
if(firebase.initializeApp(firebaseConfig))
{
    app = initializeApp(firebaseConfig);
}
else 
{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};