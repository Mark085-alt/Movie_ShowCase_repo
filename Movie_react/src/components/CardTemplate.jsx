import React from 'react'
import noImage from '../assets/no_image.jpeg'
import { Link } from 'react-router-dom';

function CardTemplate(props) {
  const item = props.item;
  return (
    <Link to={`/page/${item.id}`}>
      <div className={`h-[350px] w-[250px]  cursor pointer text-white flex relative gap-1 flex-col justify-start items-center`}>
        <div className='w-[90%] h-[80%] flex justify-center items-center'>
            <img src={item?.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}`: noImage} className='h-full w-[90%] shadow-lg shadow-black hover:h-[110%] transition-all duration-500 ease-in-out hover:w-[120%] ' alt="" />
        </div>

        <div className='absolute top-[60%] right-0 width-[50px] height-[50px] rounded-full p-2 flex justify-center items-center bg-orange-400 text-lg font-bold'>
          {item?.vote_average}
        </div>

        <div className='flex flex-col w-full items-start p-5 '>
          <p className='font-bold'>
            {item.title}
          </p>

          <p className='font-semibold text-sm text-[white]/[0.8]'>
           { `${item.overview.substring(0,30)}...`}
          </p>
        </div>

      </div>
    </Link>
  )
}

export default CardTemplate