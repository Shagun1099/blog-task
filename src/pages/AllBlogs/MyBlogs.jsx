import React from 'react';
import { APP_DATA } from '../../app-data'
import BlogCard from '../../components/blogcard';
import './index.css';

const MyBlogs = () => {
    const { blogs } = APP_DATA;
    const my_blogs = blogs.filter(d => d?.isMine === true);

  return (
    <div className='allBlogs'>
     {
         my_blogs.map(data=><BlogCard key={data?.title} data={data}/>)
     }
    </div>
  )
}

export default MyBlogs