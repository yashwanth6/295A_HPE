import { Fragment } from "react"
import React from 'react'
import {connect} from 'react-redux';
import { useState } from "react"
import axios from 'axios';
import PropTypes from 'prop-types';
import { register } from "../../actions/auth";

export const Register = ({register}) => {
    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        password: '',
        confpassword: '',
        location:''
    });
   
    const {uname,email,password,confpassword,location} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== confpassword){
            //setAlert('Passwords not matched!');
        }
        else{
            register({uname,email,password,location});
            
        }
    }

    return (



        
        <div>
            
            <div className="main" >
    
        <div className="container" >
        <div className="signup-content">

            <form className="signup-form" onSubmit={e => onSubmit(e)}>
            <h2 className="form-title">Register Here!!</h2>
                
            <div className="form-group">
            <label htmlFor="uname"><b>Username</b></label>
            <input className='form-control' 
                    type="text" 
                    placeholder="Enter Username"
                    name='uname'
                    value={uname}
                    onChange={e => onChange(e)}
                    //required pattern="[a-z]{3,}"
                 />   
            </div>
           
            <div className="form-group">
            <label htmlFor="email"><b>Email</b></label>
              <input  className='form-control' 
                        type="email" 
                        placeholder="user@gmail.com" 
                        value={email}
                        name="email"
                        onChange={e => onChange(e)}
                        //required
               />   
            </div>

            <div className="form-group">
            <label htmlFor="password"><b>Password</b></label>
            <input  className='form-control' 
                        type="password" 
                        placeholder="min8chars@6" 
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        //required 
            />   
            </div>

            <div className="form-group">
            <label htmlFor="confpassword"><b>Confirm Password</b></label>
            <input  className='form-control' 
                        type="password" 
                        placeholder="min8chars@6" 
                        name="confpassword"
                        value={confpassword}
                        onChange={e => onChange(e)}
                       // required 
            />   
            </div>

            <div className="form-group">
            <label htmlFor="location"><b>Location</b></label>
                        <div>
                       <select 
                       value={location} 
                       name='location'
                       onChange={e => onChange(e)}>
                      <option value="default">Enter Location</option>
                      <option value="sanjose">San jose</option>
                      <option value="sanfrancisco">San Francisco</option>
                       <option value="santaclara">Santa Clara</option>
                     </select>
         </div>
         </div>
              
            <div className="form-group" >
                    <input type="submit"  className="form-submit"  />
            </div>
                
            </form>
        </div>
    </div>
</div>
        
</div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
};

export default connect(null, {register})(Register);