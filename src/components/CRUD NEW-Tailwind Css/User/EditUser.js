import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
  
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
    const navigate = useNavigate();

   
// --------------- To edit the user, first get the details of the user

// get single user by Id
const { id } = useParams();

 useEffect(() => {
   axios
     .get(`http://localhost:3003/users/${id}`)
     .then((response) => {
       setName(response.data.name);
       setEmail(response.data.email);
       setPhone(response.data.phone);
     });
 }, []);

 

//----------------------------------------------------------  



// edit user
const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3003/users/${id}`, data)
    .then(navigate('/'));
    
}
  
  return (
    <div>
      <h1 className="flex justify-center align-items-center">Edit User</h1>
      <div className="flex justify-center p-10 align-items-center">
        <div className="block w-full p-6 bg-white rounded-lg shadow-lg">
          <form>
            <div className="mb-6 form-group">
              <label
                htmlFor="name"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Name
              </label>
              <input
                value={data.name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control
                    block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                placeholder="Enter name"
              />
            </div>
            {/* // email */}
            <div className="mb-6 form-group">
              <label
                htmlFor="exampleInputEmail1"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control
                        block w-full px-3 py-1.5
                        text-base font-normal text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            {/* // phone */}
            <div className="mb-6 form-group">
              <label
                htmlFor="phone"
                className="inline-block mb-2 text-gray-700 form-label"
              >
                Phone
              </label>
              <input
                value={data.phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                className="form-control block
                    w-full px-3 py-1.5 text-base font-normal
                    text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="phone"
                placeholder="phone"
              />
            </div>

            <button
             onClick={updateUser}
              type="submit"
              className="
                    px-6 py-2.5 bg-blue-600 text-white
                    font-medium  text-xs leading-tight uppercase
                    rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Edit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
