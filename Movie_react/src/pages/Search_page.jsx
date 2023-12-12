import React from "react";
import { useState, useEffect } from "react";
import CardTemplate from "../components/CardTemplate";
import { search_movie } from "../API/search_movie";
import { useLocation } from "react-router-dom";

function Search_page() {
  const location = useLocation();
  const query = location.pathname.split("/").at(-1);
  const [alldata, setAlldata] = useState([]);
  const [page, setPage] = useState(1);
  const MidURL = `search/movie?query=${query}&`;

  useEffect(() => {
    search_movie(MidURL)
      .then((res) => {
        setAlldata(res.data.results);
      })
      .catch((err) => {
        setAlldata([]);
        console.log(err);
        console.log("error in category");
      });
  }, [query]);

  return (
    <div>
      <section className="bg-gray-800 px-[30px] py-[200px] gap-14 relative grid grid-cols-4 justify-center items-center">
        <p className="absolute top-24 left-7 text-white font-bold text-5xl">{`${query.toUpperCase()}`}</p>
        {alldata &&
          alldata.map((item, index) => (
            <CardTemplate key={index} item={item}></CardTemplate>
          ))}
      </section>
    </div>
  );
}

export default Search_page;
