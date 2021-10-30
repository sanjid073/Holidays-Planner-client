import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import logo from "../../img/logo.png"
import "./Login.css"

const Login = () => {
    const {firebaseContext} = useAuth()
    const {signInWithGoogle,setUser, setIsLoading, setError} = firebaseContext;
    const history = useHistory();

    const location = useLocation();
    const redirect = location?.state?.from || "/home";
    return (
        <div className="login-section">
            <img className="my-4 d-block mx-auto" width="250px" src={logo} alt="" />
        <div className="card login-card  mx-auto p-5 mb-3 my-bg" >
            <div className="card-body text-center">
                <h3 className="card-title text-white">Login With</h3>
                <button  onClick={() =>{
         signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect)
            })
            .catch(err =>{
                setError(err.message)
            } )
            .finally(() => {
                setIsLoading(false)
            })
           }}  className="btn my-btn my-5"><img width="30px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" /> Continue with Google
                </button> 
            </div>
        </div>
        
        </div>
    );
};

export default Login;