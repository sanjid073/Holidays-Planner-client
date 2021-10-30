import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
const RegistarForm = (props) => {
  const { offer } = props;
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.id = offer._id;
    data.status = "pending";
    data.item = offer;
    fetch("https://gentle-earth-96369.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            "Good job!",
            "You booked this offer Successfully!",
            "success"
          );
          reset();
        } else {
          alert("something went wrong");
        }
      });
  };
  return (
    <div className="from-section">
      <h3 className="fw-bold">BOOK THE TOUR</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.tickets && (
          <span className="fw-bold">
         Number, Date, Tickets  required
          </span>
        )}
        <input
          autoFocus
          control={control}
          defaultValue={user?.displayName}
          {...register("name", { required: true })}
        />
        <input
          autoFocus
          defaultValue={user?.email}
          {...register("email", { required: true })}
        />
        <input
          autoFocus
          defaultValue={offer?.name}
          {...register("place", { required: true })}
        />
        <input
          placeholder="Number"
          {...register("number", { required: true })}
        />
        <input type="date" {...register("date", { required: true })} />
        <input
          type="number"
          placeholder="Number of tickets"
          {...register("tickets", { required: true })}
        />

        <textarea
          name="message"
          id=""
          placeholder="message"
          cols="30"
          rows="3"
        ></textarea>

        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default RegistarForm;
