import React, { useEffect } from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
export const ProjectCard = ( {project} ) => {

 useEffect(() => {

   }, [])
 
  return (
    
    <>
        {
            project &&
            <Link to={`/project/${project.name}`}
            state={project}

            className='bg-white h-20 w-full rounded-lg flex justify-between items-center shadow-md px-5'>

                <h4 className='text-xl md:text-2xl'> {project.name}</h4>
                <div className=' h-20 flex flex-col justify-end py-2'>
                    <p className='flex items-center'><MdOutlineLocationOn className='inline text-xl'/> {project.location}</p>
                </div>
            </Link>
            
        }
    </>
 
  )
}
