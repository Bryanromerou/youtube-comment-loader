import React, { useEffect, useState } from 'react';

const YoutubeFinder = () => {
    const [input, setInput] = useState("");
    
    const submitHandler = (e) =>{
        e.preventDefault();
        youtubeIdParser(input);
        setInput("");
    }

    const youtubeIdParser = (url)=>{
        let flag = false;
        let videoId = "";
        for (let index = 1; index < url.length; index++) {

            if(url[index-1] === "v" && url[index] === "="){
                flag = true;
            }

            if(flag && url[index] !== "&" & url[index] !== "="){
                videoId += url[index];
            }else if(url[index]==="&"){
                break;
            }

            // console.log(`Current: ${url[index]} Previous: ${url[index-1]}`)
        }
        if(videoId===""){
            console.log("Invalid ID");
            return false;
        }
        console.log(`Video ID Found: ${videoId}`);
        commentLoader(videoId);
        return videoId;
    }
    
    const commentLoader = (id) =>{
        console.log(`Looking for comments for video id ${id}....`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange = {(e)=>setInput(e.target.value)} value={input}/>
                <input type="submit" value="Enter Youtube URL"/>
            </form>
        </div>
    );
}

export default YoutubeFinder;
