import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Form from '../components/form/form';
import Login from '../components/form/login';

import Layout from '../layout/layout';
import NavBar from './navBar';
import Home from './home';


const AppRouters = () => {

  return (
    <Router>
        <Routes>

          <Route path='/' element={<Layout/>}>
                <Route index element={<NavBar/>}/>
                <Route path='/signUp' element={<Form/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
          </Route>
               
          <Route path='/*' element={<h1>Not found 404</h1>} />



         
        </Routes>
    </Router>
  )
}

export default AppRouters