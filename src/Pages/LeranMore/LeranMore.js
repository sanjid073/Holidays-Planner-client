import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const LeranMore = () => {
  return (
    <div className="About-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="my-color ">
              <i class="fas fa-grip-lines-vertical"></i> Learn More
            </h4>
            <h2 className="text-white title my-2">
              Learn More About <span className="fw-bold">Holidays Planner</span>
            </h2>
            <p className="text-white">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="my-5">
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Accomodation</h5>
                <Progress
                  percent={80}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Destination</h5>
                <Progress
                  percent={95}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Meals</h5>
                <Progress
                  percent={67}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Transport</h5>
                <Progress
                  percent={87}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeranMore;
