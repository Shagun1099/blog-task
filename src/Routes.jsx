import React from 'react';
import { BrowserRouter as Router, Routes as AllRoutes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import AllBlogsPage from './pages/AllBlogs';
import MyBlogs from './pages/AllBlogs/MyBlogs';
import BlogPage from './pages/Blog';
import Categories from './pages/categories';

const Routes = () => {
  return (
    <Router>
        <Header/>
        <AllRoutes>
              <Route path="/" element={<AllBlogsPage />} />
              <Route path='/blog/:id' element={<BlogPage />} />
              <Route path='my-blogs' element={<MyBlogs />} />
              <Route path="/categories" element={<Categories/>}/>
        </AllRoutes>
        <Footer/>
    </Router>
  )
}

export default Routes