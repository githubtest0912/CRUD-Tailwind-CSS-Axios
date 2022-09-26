import React from 'react';
import { NavLink } from 'react-router-dom';
 
const NotFound = () => {
    return (
        <div>
           <h2>Page Not found</h2>
           <p><NavLink to='/'>Visit our HomePage</NavLink></p>
        </div>
    );
}
 

 
export default NotFound;