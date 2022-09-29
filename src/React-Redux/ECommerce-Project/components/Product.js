import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
  const cardItem = (item) => {
    return (
      <>
        <div className="py-4 my-5 card " key={item.id} style={{width: "18rem"}}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="text-center card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">
              ${item.price}
            </p>
            <NavLink to ={`/product/${item.id}`} className="btn btn-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="text-center col-12">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
