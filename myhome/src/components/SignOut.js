import React from 'react'
import "../App.css"

export default function SignOut(props) {
    


    return props.auth.currentUser && (
        <div className='signout-container'>
            <h1>Do you wish to sign out?</h1>
            <button class="glow-on-hover" type="button" onClick={() => props.auth.signOut()}>Sign Out</button>
        </div>
    )
}