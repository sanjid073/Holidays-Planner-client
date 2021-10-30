import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="slider-section">
      <div className="container">
        <h4 className="my-color mb-2 text-center">TESTIMONIALS</h4>
        <h2 className="text-white title mb-5 text-center">
          What Client Say About Us
        </h2>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="client-box">
              <p className="text-white">
              I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://templatekit.puriwp.com/tenerife/wp-content/uploads/sites/10/2021/10/Image-L48UZD3.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">
                    John Doe
                  </p>
                  <br />
                  <p className="my-color m-0 client-name">Smith Tower</p>
                </div>
              </div>
              <p className="text-white mt-4 ">
              I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey.
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://templatekit.puriwp.com/tenerife/wp-content/uploads/sites/10/2021/09/Image-7TL5SCW.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Frank De Boor</p>
                  <br />
                  <p className="my-color m-0 client-name">Samantha Estate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="client-box">
              <p className="text-white">
              Might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://templatekit.puriwp.com/tenerife/wp-content/uploads/sites/10/2021/10/Image-Q375YLM.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Erick Lamela</p>
                  <br />
                  <p className="my-color m-0 client-name">Lamela Tech</p>
                </div>
              </div>
              <p className="text-white mt-4 ">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://templatekit.puriwp.com/tenerife/wp-content/uploads/sites/10/2021/09/Image-DMAU9BX.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Jens Lehman</p>
                  <br />
                  <p className="my-color m-0 client-name">Lehman Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
