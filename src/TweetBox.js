import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Palak",
      username: "palak",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://assets.architecturaldigest.in/photos/63806da6d2c4a1a597b273fd/1:1/w_2896,h_2896,c_limit/1442809583",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Optional:Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
