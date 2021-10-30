import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageAllBooking = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isUpdate, setIsUpdated] = useState(null);
  useEffect(() => {
    fetch("https://gentle-earth-96369.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, isUpdate]);
  const deleteOrders = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gentle-earth-96369.herokuapp.com/deleteOrders/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setIsDelete(true);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              setIsDelete(false);
            }
          });
      }
    });
  };
  const approveOrders = (id) => {
    fetch(`https://gentle-earth-96369.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Order Approved!", "You approved this order!", "success");
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
        console.log(data);
      });
  };
  console.log(orders);
  return (
    <div className="Booking-section">
      <h3 className="text-center text-white my-3">Manage All Booking</h3>
      {orders.map((order) => (
        <div className="col-lg-6 mx-auto">
          <div className="service-card-2 card my-bg mb-3 ">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={order.item.img}
                  className=" rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="py-2">
                  <h6 className="card-title mt-2 text-white mb-0">
                    User Name : {order.name}
                  </h6>
                  <p className="m-0 text-white">User email : {order.email}</p>
                  <h6 className="m-0 text-white">Destination : {order.item.title}</h6>
                  <p className="m-0 text-white">Date : {order.date}</p>
                  <p className="m-0 text-white">Number of tickets : {order.tickets} </p>
                  <p
                    className={
                      order.status === "pending"
                        ? "text-danger m-0"
                        : "text-success m-0"
                    }
                  >
                    <i className="far fa-clipboard"></i>
                    <strong> {order.status}</strong>{" "}
                  </p>
                  <button
                    onClick={() => approveOrders(order._id)}
                    className="btn btn-success mt-2 me-5"
                  >
                    Approve Booking
                  </button>
                  <button
                    onClick={() => deleteOrders(order._id)}
                    className="btn btn-danger mt-2 "
                  >
                    Delete Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageAllBooking;
