import React from 'react'
import { useLocation } from 'react-router-dom';
import { APP_DATA } from '../../app-data'
import BlogCard from '../../components/blogcard';
import './index.css';

const AllBlogsPage = () => {

    const { blogs } = APP_DATA;
    const {search} = useLocation();
    const category = !!search ? search.split("=")[1] : false;  

  return (
    <div className='allBlogs'>
     {
              blogs.
                  filter(d=> !search || d.category === category).
                  map(data => <BlogCard key={data?.title} data={data} />)
     }
    </div>
  )
}

export default AllBlogsPage