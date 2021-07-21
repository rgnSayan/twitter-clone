import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from '../firebase'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [tweetUsername, setTweetUsername] = useState("")
    const [{ user }] = useStateValue();

    const sendTweet = (event) => {
        event.preventDefault();

        db.collection("posts").add({
            displayName: user.displayName,
            username: tweetUsername,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
        setTweetUsername("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        alt={user?.displayName}
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    />

                    <input type="text" placeholder="What's Happening ? " value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)} />
                </div>

                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional : Enter image URL"
                    type="text"
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                />
                <input className="tweetBox__imageInput"
                    placeholder="Enter Username"
                    type="text"
                    value={tweetUsername}
                    onChange={e => setTweetUsername(e.target.value)}
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div >
    )
}


export default TweetBox
