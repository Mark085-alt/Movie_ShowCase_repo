import React, { useState } from "react";
import { search_movie } from "../API/search_movie";
import { useEffect } from "react";
import { useLinkClickHandler } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Categories(props) {
  const url = "genre/movie/list?";
  const css = props?.className;
  const [alldata, setAlldata] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    search_movie(url)
      .then((res) => {
        setAlldata(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
        console.log("error by api");
      });
  }, []);

  return (
    <div
      className={
        "right-0 top-5 bg-transparent backdrop-blur-lg flex-col px-4 flex-wrap shadow-lg text-bold shadow-black text-white transition-all ease-in-out duration-300 justify-center w-[270px] h-[400px] items-start absolute gap-5 z-50 " +
        css
      }
    >
        {
            alldata && alldata.map((item,index)=>(
                <div key={index} 
                onClick={()=>{ Navigate(`/category/${item.id}/${item.name}`)}}
                className="hover:text-[15px] hover:text-black hover:shadow-sm cursor-pointer">
                    {item?.name}
                </div>
            ))
        }
    </div>
  );
}

export default Categories;
