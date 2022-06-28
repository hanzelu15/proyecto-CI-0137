import React, { useEffect } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
export const PhaseCard = ( {phase} ) => {

 
  return (
    
    <>
        {
            phase &&
            <Link to={`/phase/${phase.name}`}
            state={phase}

            className='bg-white h-20 w-full  flex justify-between items-center shadow-md px-5'>

                <h4 className='text-2xl'> {phase.name}</h4>
                <div className=' h-20 flex flex-col justify-end py-2'>
                    <p className='flex items-center'><MdOutlineLocationOn className='inline text-xl'/> {phase.location}</p>
                </div>
            </Link>
            
        }
    </>
 
  )
}
