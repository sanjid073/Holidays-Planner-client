import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    mode: "free",
    spacing: 15,
    slidesPerView: 3,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

 useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="slider-section">
      <div className="container-service">
        <h4 className="my-color mb-3">
          <i class="fas fa-grip-lines-vertical"></i> Amazing Destination
        </h4>
        <h2 className="text-white title my-4">
          Choose The <span className="fw-bold">Destination</span> Just <br />{" "}
          Right For <span className="fw-bold">Your Vacation</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide  number-slide1">
            <div className="service-box">
              <img
                src="https://i.ibb.co/S7LwVNq/dauki-bridgejaflongsylhet.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Jaflong, Bangladesh</h4>
                <h3 className="d-inline price ms-4">480</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">
            <div className="service-box">
              <img
                src="https://i.ibb.co/RTSHCJ6/switeland.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Jufrau, Switzerland</h4>
                <h3 className="d-inline price ms-4">890</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="service-box">
              <img
                src="https://i.ibb.co/DV6D7Rn/grecc.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Parthenon, Greece</h4>
                <h3 className="d-inline price ms-4">725</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="service-box">
              <img
                src="https://i.ibb.co/K9H7TG9/Jaisalmer-Fort-Jaisalmer.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Fort, Jaisalmer</h4>
                <h3 className="d-inline price ms-4">980</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="service-box">
              <img
                src="https://i.ibb.co/vJ550vx/ittlay.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Cinque Terre, Italy</h4>
                <h3 className="d-inline price ms-4">235</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide6">
            <div className="service-box">
              <img
                src="https://i.ibb.co/DV6D7Rn/grecc.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Parthenon, Greece</h4>
                <h3 className="d-inline price ms-4">648</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
