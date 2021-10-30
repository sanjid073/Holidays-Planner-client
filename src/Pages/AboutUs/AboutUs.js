import React from "react";
import img1 from "../../img/about-big-image.jpg";
import img2 from "../../img/about-small-image.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="About-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img">
              <div className="big-img">
                <img src={img1} alt="" />
              </div>
              <div className="small-img">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="my-color mb-3">
              <i class="fas fa-grip-lines-vertical"></i> About us
            </h4>
            <h2 className="text-white title my-4">
              Plan Your <span className="fw-bold">Trip</span> with{" "}
              <span className="fw-bold">Us</span>
            </h2>
            <p className="text-white lh-base">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic. Italic
              Mountains, she had a last view back on the skyline
            </p>
            <button className="btn my-btn mt-4">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
