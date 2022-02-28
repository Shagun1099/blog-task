import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const nav_items=[
   {
       title:"All Blogs",
       path:"/"
   },{
       title:"Categories",
       path:"/categories"
   },{
       title:"My Blogs",
       path:"/my-blogs"
   }
  ];

  return (
    <div className='header'>
     <div className='header__left'>
     <h1 onClick={()=>navigate('/',{replace:true})}>Blogs App</h1>
     </div>
     <div className={`header__right`}>
         {
             nav_items.map(({title,path})=>
             <p 
             onClick={e=>navigate(path,{
                 replace:true
             })}
             className={`${location.pathname===path && "header__navSelected"}`}>{title}</p>)
         }
     </div>
    </div>
  )
}

export default Header