import React, { useState } from 'react';

function LikeandDislike({text}) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };
return (
    <div style={
    {marginLeft:"20px",
    marginTop:"10px",
    width:"1300px",
    backgroundColor:"#ffffffff",
    border:"1px solid",
    borderColor:"black",
    paddingLeft:"10px"}}>
    <div>
        <p>{text}</p>
        <button onClick={handleLike} style={{marginBottom:"10px"}}>👍 {likes}</button>
        <button onClick={handleDislike}>👎 {dislikes}</button>
    </div>
    </div>
  );
};
function Com4(){
return(
    <div>
    <h2 style={{marginLeft:"20px"}}>Bài 4: Like/Dislike Post</h2>
    <LikeandDislike text="Học ReactJS có khó không?"/> 
    <LikeandDislike text="Props và State là gì?"/> 
    <LikeandDislike text="Lập trình web có vui không?"/> 


    </div>
)
};

export default Com4;
