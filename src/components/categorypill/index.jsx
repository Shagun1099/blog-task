import React, { useEffect, useState } from 'react';
import { APP_DATA } from '../../app-data';
import './index.css';

const CategoryPill = ({ category }) => {
 
    const { categories } = APP_DATA;
    const [pill, setPill] = useState({
        color: "",
        title: ""
    });
    useEffect(() => {
        if (!categories || !categories.length || !category) return;
        const cat = categories.find(d => d.id === category);
        setPill({color:cat.color,title:cat.title})
    }, [category, categories]);

  return (
      <div style={{background:pill.color}} className='category__pill'>{pill.title}</div>
  )
}

export default CategoryPill