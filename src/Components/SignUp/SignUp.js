import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import calender from '../../images/calender.png';
import './SignUp.scss';

const SignUp = () => {
    const initialValues = { username: "", email: "", password: "",confirmPassword: "", phoneNumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Full name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Password did not match";
        } 
        if(!values.phoneNumber){
            errors.phoneNumber = "Phone number is required";
        } 

        return errors;
      };
  

    return (
        <div className='sign-up-form'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (navigate(`/chart`)
               
            ) : (
                console.log(JSON.stringify(formValues, undefined, 2))
            )}
            {/* image area  */}
            <div className="signup-img">
                <img src={calender} alt="" />
                <div className="image-description">
                <h3>Choose a date range</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam porro officia ipsa delectus dolor  </p>
                </div>
            </div>
            {/* form area  */}
            <div className="container">
                
                <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <label className="label">Your email address</label>
                    <input 
                        type="email" 
                        placeholder="Type your email" 
                        className="form-control"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        
                        />
                     <p>{formErrors.email}</p>
                </div>
                <div className="form-group">
                    <label className="label">Your password</label>
                    <input 
                    type="password" 
                    placeholder="Type your password" 
                    className="form-control" 
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>
                </div>
                <div className="form-group">
                    <label className="label">Confirm your password</label>
                    <input type="password"
                     placeholder="Re-type your password"
                      className="form-control"
                      name="confirmPassword"
                      value= {formValues.confirmPassword}
                      onChange={handleChange}
                       />
                       <p>{formErrors.confirmPassword}</p>
                </div>
                <div className="form-group">
                    <label className="label">Your full name</label>
                    <input 
                    type="text" 
                    placeholder="Type your full name" 
                    className="form-control"
                    name="username"
              
                    value={formValues.username}
                    onChange={handleChange} 
              />
                    <p>{formErrors.username}</p>
                </div>
                <div className="form-group">
                    <label className="label">Your phone number</label>
                    <input 
                    type="number" 
                    placeholder="Type your phone number" 
                    className="form-control"
                    name="phoneNumber"
              
                    value={formValues.phoneNumber}
                    onChange={handleChange}  
                    />
                    <p>{formErrors.phoneNumber}</p>
                </div>

                <div className="form-group check-terms">
                    <input className='checkbox' type="checkbox" />
                    <label className="label">I read and agree Terms and Condition </label>
                   
                </div>
               
                <button type='submit' className='btn'>Create account</button>

                </form>
            </div>
            
        </div>
    );
};

export default SignUp;