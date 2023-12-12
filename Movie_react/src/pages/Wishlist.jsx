import React from 'react'
import { useContext } from 'react';
import { Context } from '../context';
import CardTemplate from '../components/CardTemplate'

function Wishlist() {
  const{ wishlist } = useContext(Context);
  console.log(wishlist);

  return (
    <section className='bg-[black]/[0.8] px-[30px] py-[200px] gap-14 relative grid grid-cols-4 justify-center items-center'>
       <p className='absolute top-24 left-7 text-white font-bold text-5xl'>WISHLIST</p>
      {wishlist && wishlist.map((item,index)=>(
         <CardTemplate key={index} item={item}></CardTemplate>
      ))}
     

    </section>
  )
}

export default Wishlist