import React from 'react';

 
const Header = ({title}) => {
    return (
        
            <div className='w-full h-10 mb-3 bg-lime-300'>
            <h3 className='font-bold text-center text-red-800 '>{title}</h3>
            </div>
           
        
    );
}
 

 
export default Header;