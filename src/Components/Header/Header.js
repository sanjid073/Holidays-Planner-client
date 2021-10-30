import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  const { firebaseContext } = useAuth();
  const { user, Logout } = firebaseContext;
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/">
            <img src={logo} width="180px" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  activeStyle={{ color: "#FEB800" }}
                  className="nav-link nav-NavLink active "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "#FEB800" }}
                  className="nav-link  nav-NavLink active"
                  to="/myBooking"
                >
                  My Booking
                </NavLink>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <button onClick={handleClick} className="btn my-btn">
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/manage"
                    >
                      Manage All Booking
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/addOffer"
                    >
                      Add New Offer
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-NavLink" to="/">
                      <img
                        src={user.photoURL}
                        width="30px"
                        className="rounded-circle"
                        alt=""
                      />
                    </NavLink>
                  </li>
                  
                
                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "#F34E3A" }}
                      className="nav-link active nav-NavLink"
                      to="/"
                    >
                      {user.displayName}
                    </NavLink>
                  </li>
                  <li onClick={Logout} className=" btn ">
                    <i style={{color:"#F34E3A"}} class="fas fa-sign-out-alt"></i>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
