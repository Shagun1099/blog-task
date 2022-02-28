import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton';
import CategoryPill from '../categorypill';
import './index.css';

const BlogCard = ({ data }) => {
    
    const navigate = useNavigate();

  return (
    <div className='blogcard'>
        <div className='blogcard__left'>
         <img src={data.image} alt={data?.title}/>
        </div>
        <div className='blogcard__right'>
              <div className='row'>
                  <h2 className='mr-10'>{data?.title}</h2>
                  <CategoryPill category={data?.category}/>
              </div>
         <p>{data.subTitle}</p>
          <PrimaryButton onClick={()=>navigate(`/blog/${data.id}`)}>{"See full Blog ->"}</PrimaryButton>
        </div>
    </div>
  )
}

export default BlogCard