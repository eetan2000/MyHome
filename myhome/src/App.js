import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import SignIn from "./components/SignIn"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {useAuthState} from 'react-firebase-hooks/auth'

import Home from "./pages/Home"
import Notes from "./pages/Notes"
import SignOut from "./components/SignOut"

firebase.initializeApp({
  apiKey: "AIzaSyDjuVEnX0O7gmzOqNvpZAJu-rlhxuK5_gU",
  authDomain: "myhome-75c14.firebaseapp.com",
  projectId: "myhome-75c14",
  storageBucket: "myhome-75c14.appspot.com",
  messagingSenderId: "1094817154388",
  appId: "1:1094817154388:web:a7a8ca9136756e985db4c1",
  measurementId: "G-3NEJ5VECCX"
})

const auth = firebase.auth()

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? 
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/Notes" element={<Notes/>} />
              <Route path="/SignOut" element={<SignOut auth={auth}/>} />
            </Routes>
        </Router> 
        : 
        <SignIn auth={auth}/>
      }
    </>
  );
}


export default App;
