import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
const InfoButtons = ({ items, pageSize, pageNumber }) => {
  const pageItems= items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return (
    <>
      {
        pageItems && pageItems.map((i) => {
          return (
          <Link to="/home" className="shadow-xl h-[48px] w-full mb-8 rounded-none border-2 bg-white text-gray"
            >
              <div class="w-full flex justify-start">
                {i.name}
              </div>
              <div class="w-full flex justify-end">
              <MdLocationOn className="inline-block mr-1" />{i.location}
              </div>
          </Link>
          );
        })
      }
    </>
  );
  /*if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );*/
};

export default InfoButtons;