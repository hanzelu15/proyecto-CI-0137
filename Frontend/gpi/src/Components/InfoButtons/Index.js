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
            <buttonItem element={i} secodaryText=""></buttonItem>
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