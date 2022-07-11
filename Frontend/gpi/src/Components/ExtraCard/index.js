import React, { useEffect, useState } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

export const ExtraCard = ( {extra} ) => {
    const [color, setColor] = useState([]);
    useEffect(() => {
     switch (extra.type) {
        case "amueblado":
            setColor("#000");
            break;
     
        default:
            break;
     }
        
      }, []);
    console.log("llega", extra);
    return (
        <>
        {
            extra &&
            <Link to ={`/extra/${extra._id}`}
            state={extra}

            className = 'bg-white h-20 w-full rounded-lg flex justify-between items-center shadow-md px-5 hover:bg-gray-200'>

            <h4 className='text-xl md:text-2xl'> {extra.name}</h4>
            <div className=' h-20 flex flex-col justify-end py-2'>
                <p className='flex items-center'>{extra.type}</p>
            </div>
            </Link>
        }
        </>
    )
}