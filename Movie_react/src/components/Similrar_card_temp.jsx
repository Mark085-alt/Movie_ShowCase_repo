import React from "react";
import { Link } from "react-router-dom";
import no_image from "../assets/no_image.jpeg";

function Similrar_card_temp({ item }) {
  return (
    <Link to={`/page/${item?.id}`}>
      <div className="bg-[black]/[0.5] cursor-pointer group rounded-md p-2 flex flex-col gap-3 items-start justify-start">
        <div className="w-[210px] h-[280px] relative">
          <img
            className="w-full h-full"
            src={
              item?.poster_path
                ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                : no_image
            }
            alt=""
          />

          <div className="absolute bottom-0 left-0 h-[30px] group-hover:h-[50px]  px-5 flex justify-start items-center w-full bg-gradient-to-t from-black to-[transparent]/[0.1] group-hover:border-b-[2px] group-hover:border-red-600 transition-all ease-in duration-300">
            <p className="text-white font-semibold text-sm">
              {`${item?.original_title.substring(0, 15)}..`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Similrar_card_temp;
