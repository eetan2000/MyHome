import React from 'react'
import "../App.css"

import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        props.auth.signInWithPopup(provider)
    }

    return (
        <div className='signin-container'>
            <button class="glow-on-hover" type="button" onClick={signInWithGoogle}>Sign In</button>
        </div>
    )
}