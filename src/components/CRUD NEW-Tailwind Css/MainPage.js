import React from 'react';

import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import User from './User/User'
import {Routes, Route} from 'react-router-dom'
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
 
const MainPage = () => {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/users/:id' element={<User />} />
                <Route path='/edit-user/:id' element={<EditUser />} />
            </Routes>
           
            
        </div>
    );
}
 

 
export default MainPage;