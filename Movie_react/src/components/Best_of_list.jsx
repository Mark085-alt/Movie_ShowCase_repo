import React from 'react'
import { search_movie } from '../API/search_movie';
import { useEffect,useState } from 'react';
import Similrar_card_temp from './Similrar_card_temp';
import { Link } from 'react-router-dom';


function Best_of_list(props) {
    const query = props.query;
    const [alldata, setAlldata] = useState([]);
    const MidURL = "discover/movie?";
    const LastURL = `&with_genres=${query}`

    useEffect(() => {
      search_movie(MidURL,LastURL)
        .then((res) => {
          console.log(query," : ",res?.data?.results);
          setAlldata(res.data.results);
        })
        .catch((err) => {
          result = [];
          console.log(err);
          console.log("error by api");
        });
    }, []);
  return (
    <div className='w-full gap-5 overflow-hidden flex flex-col'>
      <Link to={`/category/${query}/${props.name}`}>
        <span className='pl-10 text-2xl cursor-pointer hover:text-red-600 transition-all ease-in-out'>{props.name}</span>
        </Link>
        <div className='overflow-auto flex gap-10 scrollbar scrollbar-thumb-transparent'>
        {
          alldata && alldata.map((item)=>(
              <Similrar_card_temp key={item?.id} item={item}>
                
              </Similrar_card_temp>
          ))
        }
        </div>

    </div>
  )
}

export default Best_of_list