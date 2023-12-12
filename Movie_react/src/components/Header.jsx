import React, { useEffect } from "react";
import { search_movie } from "../API/search_movie";
import { useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { BiPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context";
import { toast } from "react-toastify";


export function Header() {
  const popular = "movie/now_playing?";
  let result = [];
  const [data, setData] = useState([]);
  const [sliderindex, setSliderindex] = useState(0);
  const {addToWishlist} = useContext(Context);

  useEffect(() => {
    search_movie(popular)
      .then((res) => {
        result = res?.data?.results;

        setData(result.splice(6, 6));
      })
      .catch((err) => {
        result = [];
        console.log(err);
        console.log("error by api");
      });
  }, []);

  setTimeout(() => {
    if (sliderindex > 4) {
      setSliderindex(0);
    } else {
      setSliderindex(sliderindex + 1);
    }
  }, 6000);



  return (
    <>
      {/* slider */}
      <div>
        <section className={`h-screen relative`}>

          {/* Navbar  */}

          {/* slider image  */}
          <div className={`overflow-hidden h-full relative`}>
            {data &&
              data?.map((item, index) => (
                <div
                  key={index}
                  className={
                    `h-full transition-all ease-in-out` +
                    (sliderindex === index ? " block" : " hidden")
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt="error"
                    className={`w-full h-full`}
                  />



                  <div className="absolute top-[20%] z-10 h-[400px] w-[400px] left-[5%] flex flex-col text-white font-semibold gap-5">


                    <p>
                      Popularity :<span>{item.popularity}</span>
                    </p>


                    <p className="flex">
                      <LiaStarSolid className="text-yellow-500"></LiaStarSolid>
                      <span className="font-bold">
                        IMDB : {item.vote_average}
                      </span>
                    </p>


                    <p className="text-5xl text-bold">{item.title}</p>


                    <p>{`${item.overview.substring(0, 110)}...`}</p>


                    <div className="flex gap-10 mt-10 bottom-[160px]">
                      <Link to={`/page/${item.id}`} className="flex items-center justify-center gap-2 bg-red-600 px-5 py-3 rounded-full shadow-sm shadow-red-600 border-[1px] border-red-500 hover:bg-black">
                        <BsFillPlayFill></BsFillPlayFill>
                        <span>PLAY NOW</span>
                      </Link>


                      <button onClick={()=>{
                        addToWishlist(item);
                        toast.success("added to wishlist")
                      }} 
                       className="flex items-center justify-center gap-3 bg-black px-5 py-3 rounded-full border-[1px] border-red-600 hover:bg-red-600 ">
                        <BiPlus></BiPlus>
                        <span>WISHLIST</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-full top-0"></div>


          {/*sliding bar / dots  */}
          <div className="absolute flex justify-center p-5 items-center gap-5 z-10 bottom-4 left-[50%] translate-x-[-50%]">
            {data &&
              data?.map((item, index) => (
                <div
                  key={index}
                  className={
                    `h-[2px] w-10 transition-all duration-300 ease-in-out` +
                    (sliderindex === index ? " bg-white" : " bg-[white]/[0.2]")
                  }
                ></div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
