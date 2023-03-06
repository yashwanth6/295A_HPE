import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import {useGoogleLogin} from '@react-oauth/google';

export const Register = ({setAlert , register,  isAuthenticated}) => {
    
    
    const [formData, setFormData] = useState({
        firstName:'',
        emailId: '',
        password: '',
        confpassword: ''
    })
    const { firstName, emailId, password, confpassword } = formData;
    const [formValues, setFormValues] = useState(formData);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(firstName + " "+ emailId +" "+ password);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (password !== confpassword) {
            setAlert('Passwords do not match', 'danger');
          } else {
            register({ firstName, emailId , password });
            alert("Account created successfully!!");
          }
    }

      if(isAuthenticated){
          
          return <Redirect to="/login" />;
      }  
        

      

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

        if (!values.firstName) {
          errors.firstName = "Name is required!";
        }


        if (!values.emailId) {
          errors.emailId = "Email is required!";
        } else if (!regex.test(values.emailId)) {
          errors.emailId = "This is not a valid email format!";
        }
        
        if (!values.password) {
            errors.password = "Password is required!";
          } else if (!PWD_REGEX.test(values.password)) {
            errors.password = "8 to 24 characters. Must Include one upper case, one lower case, number and  special character";
          }

        if(values.password != values.confpassword){
            errors.confpassword = "Password didn't match";
        }


        return errors;
      };

      function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        console.log(accessToken);

       // dispatch(signupGoogle(accessToken,nagivate))
    }
      
     // const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

    return (
         
        <body>
            
            <div class="container">

           
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto mainbox">
                        <div class="card border-0 shadow rounded-3 my-5 cardbox">
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-left mb-5 fs-5 signincss"><b>Create an Account (it's free)</b></h5>
                                <p class="consent">By signing in to your account, you agree to HPE's Terms of Service and consent to our Cookie Policy and Privacy Policy.</p>
                                <form className="signup-form" onSubmit={e => onSubmit(e)}>

                                    <div class="form-floating mb-3">
                                    <div className="form-group">
                                        <label htmlFor="emailId"><b>Email</b></label>
                                        <input className='form-control' 
                                            type="text" 
                                            placeholder="Enter Email"
                                            name='emailId'
                                            value={emailId}
                                            onChange={e => onChange(e)}
                                            required
                                        />   
                                    </div>
                                    </div>

                                    <p>{formErrors.emailId}</p>

                                    <div class="form-floating mb-3">
                                    <div className="form-group">
                                        <label htmlFor="firstName"><b>First Name</b></label>
                                        <input className='form-control' 
                                            type="text" 
                                            placeholder="Enter name"
                                            name='firstName'
                                            value={firstName}
                                            onChange={e => onChange(e)}
                                            required
                                        />   
                                    </div>
                                    </div>

                                    <p>{formErrors.firstName}</p>

                                    <div class="form-floating mb-3">
                                    <div className="form-group">
                                        <label htmlFor="password"><b>Password</b></label>
                                        <input className='form-control' 
                                            type="password" 
                                            placeholder="Enter Password"
                                            name='password'
                                            value={password}
                                            onChange={e => onChange(e)}
                                            required
                                        />   
                                    </div>
                                    </div>

                                    <p>{formErrors.password}</p>

                                    <div class="form-floating mb-3">
                                    <div className="form-group">
                                        <label htmlFor="confpassword"><b>Confirm Password</b></label>
                                        <input className='form-control' 
                                            type="password" 
                                            placeholder="Enter Password"
                                            name='confpassword'
                                            value={confpassword}
                                            onChange={e => onChange(e)}
                                            required
                                        />   
                                    </div>
                                    </div>

                                    <p>{formErrors.confpassword}</p>
                                   
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                                    </div>
                                    <Link to='/login'>Have an account? Sign Up</Link>

                                   
                                    <span className="or">or</span>
                 <button  onClick={() => login()}  className="googleBTN">
                    <i class="fa-brands fa-google"></i>  Sign up with google</button>

                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </body>

    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps,{setAlert,register})(Register);