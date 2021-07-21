import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{ user }, dispatch] = useStateValue();
    console.log(user);
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to Twitter</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in Using Google</Button>
            </div>
        </div>
    )
}


export default Login