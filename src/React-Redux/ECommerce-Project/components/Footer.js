import React from "react";


const Footer = () => {
  return (
    <div>
      <footer className="pt-4 mt-6 page-footer font-small bg-info">
        <div className="container">
          <div className="row">
            <div className="mb-4 col-md-6">
              <form className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="m-2 my-0 btn btn-sm btn-outline-dark"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="py-3 text-center footer-copyright">
          © 2020 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Footer;
