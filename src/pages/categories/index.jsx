import React from 'react'
import { APP_DATA } from '../../app-data'
import CategoryCard from '../../components/categorycard';
import './index.css';

const Categories = () => {
    const { categories } = APP_DATA;
  return (
      <div className='categories'>
          {
              categories.map(d=><CategoryCard data={d} key={d.id}/>)
          }
    </div>
  )
}

export default Categories