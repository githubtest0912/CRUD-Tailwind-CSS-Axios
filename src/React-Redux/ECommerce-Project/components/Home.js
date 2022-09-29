import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="py-3 mb-5 carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/homepage-seen-laptop-screen_23-2149416725.jpg?w=900&t=st=1664344245~exp=1664344845~hmac=0f1db85fdba7f03e48d467ea4e5d126a0618cd767123c80d730af3e148d487c2" className="d-block w-100" alt="..." style={{height:'520px'}}/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416724.jpg?w=1060&t=st=1664344286~exp=1664344886~hmac=375d654f9b541e6d43e06801e71c80a9b60b218ec90bc889d0e166e1fe7f52e7" className="d-block w-100" alt="..." style={{height:'520px'}}/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416730.jpg?w=900&t=st=1664344317~exp=1664344917~hmac=29eac1e2d6604a31bbd0f83380f6c100875c009173f5d243610708cd2a3982e1" className="d-block w-100" alt="..." style={{height:'520px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Product />
     
    </div>
   
  );
};

export default Home;
