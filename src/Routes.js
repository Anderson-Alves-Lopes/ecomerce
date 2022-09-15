/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home';
import {About} from './pages/About';
import {SignIn} from './pages/SingIn';
import { NotFound } from './pages/NotFound';

 export const AppRoutes = () =>{
    return(
      <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/about" element={<About />} />
       <Route path="/signin" element={<SignIn />} />
       <Route  path="*" element={<NotFound />} />
      </Routes>
    );
}

export default AppRoutes;