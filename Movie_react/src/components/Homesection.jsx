import React from 'react'
import Best_of_list from './Best_of_list'

function Homesection() {
  return (
    <>

    <div className='min-h-screen flex flex-col items-center justify-center py-20 px-15 gap-10 bg-black w-full text-white font-bold text-lg'>
      {/* ACTION */}
        <Best_of_list query={"28"} name={"ACTION"}></Best_of_list>
      {/* COMEDY */}
        <Best_of_list query={"35"} name={"COMEDY"}></Best_of_list>
      {/*  HORROR*/}
        <Best_of_list query={"27"} name={"HORROR"}></Best_of_list>
      {/* THRILLER */}
        <Best_of_list query={"53"} name={"THRILLER"}></Best_of_list>
    </div>
    </>
  )
}

export default Homesection