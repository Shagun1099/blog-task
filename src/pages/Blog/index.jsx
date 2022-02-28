import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_DATA } from '../../app-data';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CategoryPill from '../../components/categorypill';
import './blog.css';

const BlogPage = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { blogs } = APP_DATA;
    const blogId = +pathname.split('/')[2];
    const [blog, setBlog] = useState({});

    useEffect(() => {
        if (!blogId) return;

        setBlog(blogs.find(d => d.id === blogId)||{});

    }, [blogId]);

    const { category, title, subTitle, content, image } = blog;
    console.log(blog);
  return (
      <div className='blog'>
          <img src={image} alt={title}/>
          <h1 className='title'>{title}</h1>
          <CategoryPill category={category}/>
          <p className='subtitle'>{subTitle}</p>
          <p className='content'>{content}</p>
          <PrimaryButton onClick={()=>navigate('/',{replace:true})} >{"Go Back to Home ->"}</PrimaryButton>
      </div>
  )
}

export default BlogPage