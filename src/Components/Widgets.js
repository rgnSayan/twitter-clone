import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcons" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1408704413565325316"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="SAYANMO83622224"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.facebook.com/sayan28072000"}
                    options={{ text: "#ReactJs is awesome", via: "sayan28072000" }}
                />
            </div>
        </div>
    )
}

export default Widgets
