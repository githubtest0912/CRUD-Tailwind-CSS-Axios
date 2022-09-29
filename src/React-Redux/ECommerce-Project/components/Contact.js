import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="py-4 my-4 col-12">
            <h1 className="text-center">Have Some Question?</h1>
            <hr />
          </div>
        </div>

        <div className="py-5 row">
          {/* // image */}
          <div className="col-md-5">
            <img
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=900&t=st=1664355782~exp=1664356382~hmac=ee8d0069d93bf7de83f7d6a4cefff71987df3e40a441e8a0a3b8692dded41685"
              alt=""
            />
          </div>

          {/* // form */}

          <div className="col-md-6">
            <form>

            <div className="mb-3">
                <label for="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="test"
                  className="form-control"
                  id="exampleForm"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <NavLink to='/' className='btn btn-success' type='submit'>Send Message</NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
