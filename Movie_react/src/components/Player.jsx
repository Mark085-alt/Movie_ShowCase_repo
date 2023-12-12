import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { useEffect } from 'react';
import { search_movie } from '../API/search_movie';


function player(props) {
    const id = props?.id;
    const isplay = props?.isplay;
    const [playerId, setPlayerId] = useState("");
    const MidURL = `movie/${id}/videos?`

    useEffect(() => {
        search_movie(MidURL)
          .then((res) => {
            let result = res?.data?.results;
            result = result?.filter((item) => item?.type === "Trailer");
            setPlayerId(result[0]?.key);
          })
          .catch((err) => {
            console.log(err);
            console.log("error in category");
          });
      }, [id]);
      console.log(playerId);


  return (
   <>
   {
    isplay ? ( <div className='w-full h-full '>
    <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${playerId}`}
    ></ReactPlayer>
</div>) : (<></>)
   }
   </>
  )
}

export default player