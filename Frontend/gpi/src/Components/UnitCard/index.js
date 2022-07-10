import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
export const UnitCard = ( {unit} ) => {

 
  return (
    
    <>
        {
            unit &&
            <Link to={`/phase/${unit.name}`}
            state={unit}

            className='bg-white h-20 w-full rounded-lg flex justify-between items-center shadow-md px-5 hover:bg-gray-200'>

                <h4 className='text-2xl'> {unit.number}</h4>
                <div className=' h-20 flex flex-col justify-end py-2'>
                    {/* <p className='flex items-center'><MdOutlineLocationOn className='inline text-xl'/> {phase.location}</p> */}
                </div>
            </Link>
            
        }
    </>
 
  )
}