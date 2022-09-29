import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../Redux/actions/index";

const ProductDetail = () => {
  const proId = useParams();

  // use '==' don't use '==='
  const proDetail = DATA.filter((x) => x.id == proId.id);
  const product = proDetail[0];
  console.log(product);

  // add to cart button (Change => 'Add to Cart' to 'Remove from Cart')
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(deleteItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <div>
      <div className="container px-2 py-5">
        <div className="row">
          <div className="flex mx-auto col-md-6 justify-content-center product">
            <img
              src={product.img}
              alt={product.title}
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="my-5 btn btn-dark"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
