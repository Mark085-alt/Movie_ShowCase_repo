import React from 'react'
import { useState,useEffect } from 'react'
import { search_movie } from '../API/search_movie'
import Similrar_card_temp from './Similrar_card_temp'

function Similar_data({id}) {
    const MidURL = `movie/${id}/similar?`
    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        search_movie(MidURL)
          .then((res) => {
            setAlldata(res.data.results.splice(10,10));
        
          })
          .catch((err) => {
            setAlldata([]);
            console.log(err);
            console.log("error in category");
          });
      }, [id]);
    

  return (
    <div className='w-[700px]'>
        {
            alldata && (
                alldata.length !==0 ? (
                    <div className='flex gap-5 overflow-auto'>
                        {
                            alldata?.map((item)=>(
                                <Similrar_card_temp key={item?.id} item={item}></Similrar_card_temp>
                            ))
                        }
                    </div>
                ) :(
                    <div>no data</div>
                )
            )
        }
        
    </div>
  )
}

export default Similar_data