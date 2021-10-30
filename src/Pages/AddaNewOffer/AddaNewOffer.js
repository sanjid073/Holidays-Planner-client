import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddaNewOffer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://gentle-earth-96369.herokuapp.com/offers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Offer Added!", "Offer has been added!", "success");
          reset();
        } else {
        }
      });
  };
  return (
    <div className="slider-section">
       <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="from-section-2">
            <h3 className="fw-bolder">Add a new offer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.img && (
          <span className="fw-bold">
         All Input are  required
          </span>
        )}
              <input
                placeholder="Offer Name"
                {...register("name", { required: true })}
              />
              <input
                placeholder="Offer Title"
                {...register("title", { required: true })}
              />
              <textarea
                placeholder="Offer descriptions"
                {...register("dec", { required: true })}
              />
              <input
                placeholder="Offer price"
                type="number"
                {...register("price", { required: true })}
              />
              <input
                placeholder="Offer image URl"
                {...register("img", { required: true })}
              />

              <input type="submit" />
            </form>
          </div>
        </div>
        <div className="col-lg-4">
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddaNewOffer;
