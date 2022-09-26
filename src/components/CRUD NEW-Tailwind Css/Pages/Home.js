import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Home = () => {

const [users,setUsers] = useState([]);

useEffect(() => {
  loadUser();
  
},[])

//get
const loadUser = () => {
  axios.get('http://localhost:3003/users')
  .then((response) => {
      setUsers(response.data.reverse());
    
  });
  
};
  

//delete 
const deleteFunction = (id) => {
  axios.delete(`http://localhost:3003/users/${id}`)
  .then(loadUser())
  
}

    
  return (
    <div className="flex flex-col w-full h-full px-10 py-8">
      <h1 className="text-3xl font-semibold text-center text-black">Home</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="bg-gray-800 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-white"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-white"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-white"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-white"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-sm font-medium text-white"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {users.map((item,index) => {
                    return(
                        <>
                         <tbody>
                  <tr className="bg-white border-b-2" key={index}>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                     {item.email}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                     {item.phone}
                    </td>
                    
                    <td className="px-6 py-4 space-x-4 pxflex whitespace-nowrap ">
                    <Link to = {`/users/${item.id}`} className="px-6 py-2 text-white bg-black rounded-md text-decoration-none">View</Link>
                     <Link to = {`/edit-user/${item.id}`} className="px-6 py-2 text-white bg-blue-500 rounded-md text-decoration-none">Edit</Link>
                     <Link onClick = {() => deleteFunction(item.id)} to ='/' className="px-6 py-2 text-white bg-red-600 rounded-md text-decoration-none">Delete</Link>
                    </td>
                  </tr>
                </tbody>
                        </>
                    )
                })}
               
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
