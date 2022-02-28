import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CategoryCard = ({ data }) => {
    const navigate = useNavigate();

  return (
      <div
          onClick={()=>navigate(`/?category=${data.id}`)}
          className='category'>
          {
              data.images.map(d => <img src={d} alt={d?.title}/>)
          }    
          <div className='absolute__info'>
              <h1 style={{color:data.color}}>{data?.title}</h1>
          </div>
  </div>
  )
}

export default CategoryCard