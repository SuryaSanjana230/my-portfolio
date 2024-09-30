import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {
  return (
    <>
      <section id="About" className="offset">
        <h1 className="headingcenter"><b>Hi, I'm Sanjana.</b></h1>
        <div className="container">
          <p className="textcenter">"A creative UI/UX designer and full-stack developer with a passion for crafting digital experiences that solve real-world problems. Let's turn ideas into reality together."</p>
        </div>
        {/* Add the moving text */}
        <div className="moving-text-container">
          <p className="moving-text">Welcome to My Portfolio &#x2022;  Welcome to My Portfolio &#x2022;Welcome to My Portfolio&#x2022;Welcome to My Portfolio&#x2022;Welcome to My Portfolio &#x2022;Welcome to My Portfolio&#x2022;Welcome to My Portfolio&#x2022;Welcome to My Portfolio&#x2022;Welcome to My Portfolio</p>
        </div>
        

        <div className="container mission-vision-container">
  <div className="row">
    <div className="col-lg-6">
      <div className="card mission-card">
        <div className="card-body">
          <h5 className="card-title aboutstyle2">My Mission</h5>
          <p className="card-text aboutstyle3">
            "To use my skills in UI/UX design and full-stack development to craft user-centered solutions that bring ideas to life and drive meaningful change."
          </p>
        </div>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="card vision-card">
        <div className="card-body">
          <h5 className="card-title aboutstyle2">My Vision</h5>
          <p className="card-text aboutstyle3">
            "To create intuitive and impactful digital experiences that seamlessly blend creativity and technology, making a positive difference in the lives of users across the globe."
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
}
