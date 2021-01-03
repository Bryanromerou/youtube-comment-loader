import React, { useState } from 'react';

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
        console.log(videoId);
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
