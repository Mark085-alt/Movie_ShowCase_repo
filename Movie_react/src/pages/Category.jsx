import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { search_movie } from '../API/search_movie';
import CardTemplate from "../components/CardTemplate";

function Category() {
  const location = useLocation();
  const catID = location.pathname.split("/").at(-2);
  const catName = location.pathname.split("/").at(-1);
  console.log(catID);
  const [alldata, setAlldata] = useState([]);
  const [page, setPage] = useState(1)
  const MidURL = "discover/movie?";
  const LastURL = `&with_genres=${catID}&page=${page}`;

  useEffect(() => {
    search_movie(MidURL,LastURL)
      .then((res) => {
        setAlldata(res.data.results);
    
      })
      .catch((err) => {
        setAlldata([]);
        console.log(err);
        console.log("error in category");
      });
  }, [catID]);

  console.log(catID);
  console.log(catName)

  return (
    <section className='bg-gray-800 px-[30px] py-[200px] gap-14 relative grid grid-cols-4 justify-center items-center'>
       <p className='absolute top-24 left-7 text-white font-bold text-5xl'>{`${catName.toUpperCase()}`}</p>
      {alldata && alldata.map((item,index)=>(
         <CardTemplate key={index} item={item}></CardTemplate>
      ))}
     

    </section>
  )
}

export default Category