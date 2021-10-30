import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

const FollowInsta = () => {
    const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    mode: "free",
    spacing: 15,
    slidesPerView: 6,
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
    <div className="About-section">
      <div className="container-service">
        <h4 className="my-color ">
          <i class="fas fa-grip-lines-vertical"></i> Instagram
        </h4>
        <h2 className="text-white title mb-3">
          <span className="fw-bold">Holidayplanners</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide  number-slide1">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg"
                width="200px"
                height="210px"
                alt=""
                
              />
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image6.jpg"
                width="200px"
                height="210px"
                alt=""
              />
            </div>
          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image3.jpg"
                width="200px"
                height="210px"
                alt=""
              />
              
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image4.jpg"
                width="200px"
                height="210px"
                alt=""
              />
              
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image1.jpg"
                width="200px"
                height="210px"
                alt=""
              />
             
            </div>
          </div>

          <div className="keen-slider__slide number-slide6">
            <div className="service-box-2">
              <img
                src="https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image5.jpg"
                width="200px"
                height="210px"
                alt=""
              />
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FollowInsta;
