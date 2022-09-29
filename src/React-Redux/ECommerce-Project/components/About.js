import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4 text-primary fw-bold">About Us</h1>
            <p className="mb-4 lead">
              Smartphones have a small viewable area: a rectangular window
              through which only a part of a typical web page can be viewed.
              This suggests that related information should be grouped together,
              a principle that we have already observed in Figure 8.3, the only
              additional requirement being that the grouping should have roughly
              the same aspect ratio as the smartphone’s screen. It is common
              practice for special applications to be written to support mobile
              devices. One advantage of such applications is that they can store
              information within the device, e.g., a candidate’s Admission No.
              Instead of a candidate needing to locate the NUTS enrolment form
              and type an admission number, an application could immediately
              display the relevant check boxes.
            </p>
            <NavLink to = '/contact' className='px-3 btn btn-success'>Contact Us</NavLink>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img src='https://img.freepik.com/free-photo/waistup-portrait-cute-beautiful-asian-woman-orange-hoodie-introduce-produce-banner-pointing-blank-white-space-holding-product-smiling-recommend-advertisement-white-background_176420-51222.jpg?w=900&t=st=1664351794~exp=1664352394~hmac=ca8a688b603c58fae177d26fdf84a654ad5d8239821d2384f01f0cb21608411b' alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
