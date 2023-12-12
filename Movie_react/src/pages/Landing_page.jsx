import React, { PureComponent } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { search_movie } from "../API/search_movie";
import { LiaStarSolid } from "react-icons/lia";
import Similar_data from "../components/Similar_data";
import { BsFillPlayFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { useContext } from "react";
import { Context } from "../context";
import Player from "../components/Player";
import { toast } from "react-toastify";

function Landing_page() {
  const location = useLocation();
  const movie_id = location.pathname.split("/").at(-1);
  const [alldata, setAlldata] = useState([]);
  const MidURL = `movie/${movie_id}?`;
  const [showDetails, setShowDetails] = useState("overview");
  const {addToWishlist} = useContext(Context);
  const [isplay, setIsplay] = useState(false);

  useEffect(() => {
    search_movie(MidURL)
      .then((res) => {
        setAlldata(res.data);
        console.log(res);
      })
      .catch((err) => {
        setAlldata([]);
        console.log(err);
        console.log("error in category");
      });
  }, [movie_id]);

  console.log(movie_id);
  return (
    <div className="relative min-h-screen w-full bg-black">


      {alldata && (

        <>

        {/* main div */}
      <div className="bg-[black] min-h-screen py-[90px] flex justify-center items-start gap-10">
          {/* left div */}
          <div className="w-full h-full flex justify-center items-center relative">
            <img
              className="h-full w-full"
              src={`https://image.tmdb.org/t/p/original${alldata.poster_path}`}
              alt=""
            />
            <div className=" w-full absolute top-0 h-[30px] bg-gradient-to-b from-black to-transparent"></div>
            <div className=" w-[30px] absolute left-0 h-full bg-gradient-to-r from-black to-transparent"></div>
            <div className=" w-full absolute bottom-0 h-[30px] bg-gradient-to-t from-black to-transparent"></div>
            <div className=" w-[30px] absolute right-0 h-full bg-gradient-to-l from-black to-transparent"></div>
          </div>

          {/* right div */}
          <div className="w-full px-10 h-full flex flex-col justify-start items-start text-white mt-6 gap-4">
            {/* right-upper */}
            <div className="w-full px-5 flex flex-col gap-4 ">
              <div className="w-full flex justify-between items-center">
                <p className=" text-5xl font-bold "> {alldata?.title}</p>
                <div className="flex gap-2 item-center justify-center text-3xl font-bold pr-10">
                  <LiaStarSolid className="text-yellow-500"></LiaStarSolid>
                  <p>{`${alldata?.vote_average?.toFixed(1)}`}</p>
                </div>
              </div>

              <div className="flex gap-5 text-sm font-bold text-[white]/[0.4] ">
                <p className="border-r-2 border-[white]/[0.4] pr-4">{`${alldata?.release_date?.substring(
                  0,
                  4
                )}`}</p>
                <p className="border-r-2 border-[white]/[0.4] pr-4">{`${alldata?.runtime} min`}</p>
                <p className=" ">{`${alldata?.original_language}`}</p>
              </div>
            </div>

            <div className="mx-5">
              <div className="flex gap-10 mt-10 bottom-[160px]">
                <button
                  onClick={()=>{
                    setIsplay(true)
  
                  }}
                  className="flex items-center justify-center gap-2 bg-red-600 px-5 py-3 rounded-full shadow-sm shadow-red-600 border-[1px] border-red-500 hover:bg-black"
                >
                  <BsFillPlayFill></BsFillPlayFill>
                  <span>PLAY TRAILER</span>
                </button>
                <button onClick={()=>{
                        addToWishlist(alldata);
                        toast.success("Added to WishList")
                      }}
                      className="flex items-center justify-center gap-3 bg-black px-5 py-3 rounded-full border-[1px] border-red-600 hover:bg-red-600">
                  <BiPlus></BiPlus>
                  <span>WISHLIST</span>
                </button>
              </div>
            </div>

            {/* right-mid */}
            <div className=" w-full px-5 my-14 flex flex-col gap-8 h-[250px]">
              {/* upper-div */}
              <div className="flex justify-start gap-10 w-full items-center font-bold ">
                <div
                  className="cursor-pointer flex flex-col justify-center items-center gap-3"
                  onClick={() => {
                    setShowDetails("overview");
                  }}
                >
                  <p>OVERVIEW</p>
                  <div
                    className={
                      `h-1 w-full transition-all duration-300 ease-in-out` +
                      (showDetails === "overview" ? " bg-red-700 " : "")
                    }
                  ></div>
                </div>
                <div
                  className="cursor-pointer flex flex-col justify-center items-center gap-3"
                  onClick={() => {
                    setShowDetails("cast");
                  }}
                >
                  <p>CAST</p>
                  <div
                    className={
                      `h-1 w-full transition-all duration-300 ease-in-out` +
                      (showDetails === "cast" ? " bg-red-700 " : "")
                    }
                  ></div>
                </div>
              </div>

              {/* lower div */}
              <div className="w-full">
                <div
                  className={
                    `` + (showDetails === "overview" ? "block" : "hidden")
                  }
                >
                  <div className="flex flex-col gap-5">
                    <p>{alldata.overview}</p>
                    <div className="flex justify-start items-center font-bold text-[white]/[0.6]">
                      {alldata?.genres &&
                        alldata?.genres?.map((genre) => (
                          <p
                            className="px-5 border-r-2 border-[white]/[0.6]"
                            key={genre.id}
                          >
                            {genre.name}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`` + (showDetails === "cast" ? "block" : "hidden")}
                >
                  <div className="flex overflow-auto gap-5">
                    {alldata?.production_companies &&
                      alldata?.production_companies.map((pc) => (
                        <div key={pc?.id}>
                          <div className="h-[100px] w-[100px] bg-white rounded-full ">
                            <img
                              src={`https://image.tmdb.org/t/p/original${pc?.logo_path}`}
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* right-lower */}
            <div className="w-full overflow-auto">
              <p className="text-lg mx-5 font-semibold">RELATED</p>
              <Similar_data id={alldata.id}></Similar_data>
            </div>
          </div>
      </div>
          
          {/* player */}
       <div className={`h-full w-full justify-center item-center sticky top-0 left-0 right-0 bottom-28 z-50 ` + 
        (isplay ? " flex " : " hidden ")}>

          <div className="relative ">

          <Player id={alldata?.id} isplay={isplay}></Player>

          <button
          onClick={()=>{
            setIsplay(false)
          }} className=" absolute top-1 right-2 text-lg font-bold text-white transition-all ease-in-out"
          >
            X
          </button>
          </div>
        </div>

         </>
      )} 
    </div>
  );
}

export default Landing_page;
