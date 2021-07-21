import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import FlipMove from "react-flip-move";
import db from '../firebase'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        id={post.text}
                        username={post.username}
                        displayName={post.displayName}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        timestamp={post.timestamp}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
