import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

 // get single user by Id
 
 
  useEffect(() => {
    axios
      .get(`http://localhost:3003/users/${id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
     
     <Link className="p-2 mt-10 text-2xl font-semibold text-black bg-green-500 rounded-md font-Inter text-decoration-none"
                  
           to = '/'
           >
             Go Home
           </Link>
     
      {user && (
        <>
          <div className="flex justify-center items-center px-6 py-4 w-[500px] h-[200px] border border-black mt-16 border-b-4">
            <div className="flex flex-col w-5/12 space-y-4">
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">Name:</h2>
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">Email:</h2>
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">Phone:</h2>
            </div>
            <div className="flex flex-col w-9/12 space-y-4">
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">{user.name}</h2>
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">{user.email}</h2>
                <h2 className="text-2xl font-semibold text-black border-b border-black font-Inter">{user.phone}</h2>
               
               
               
            </div>
            
           
          </div>
          
        </>
        
      )}
     

     
    </div>
  );
};

export default User;
