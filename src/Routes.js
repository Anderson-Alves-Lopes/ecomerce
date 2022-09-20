
import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {SignIn} from './pages/SignIn';
import  { SignUp } from './pages/SignUp';
import {AdPages} from './pages/AdPages';
import { NotFound } from './pages/NotFound';

 export const AppRoutes = () =>{
    return(
      <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/about" element={<About />} />
       <Route path="/signin" element={<SignIn />} />
       <Route path='/signup'  element={<SignUp />} />
       <Route path='/ad/:id'  element={<AdPages />} />
       <Route  path="*" element={<NotFound />} />
      </Routes>
    );
}

export default AppRoutes;

