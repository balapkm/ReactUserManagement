import React, {
  useEffect
} from 'react';

import './Login.css';

import {
  useHistory
} from "react-router-dom";

import {
  checkUser
} from "../../services/UserServices";

import {
  useForm
} from "react-hook-form";

/**
 * Login user
 */
function Login() {
  const history = useHistory();

  const {
    handleSubmit,
    register,
    errors,
  } = useForm();

  /**
   * Use effects
   */
  useEffect(() => {
    let user = window.localStorage.getItem('user');
    if(user) {
      history.push("/users");
    }
  }, []);

  /**
   * Do login
   * @param {*} values 
   */
  const login = (values) => {
    checkUser(values.email,values.password).then((res) => {
      if(res.length === 1) {
        history.push("/users");
        window.localStorage.setItem('user',res[0]['id']);
      } else {
        alert('Invalid user')
      }
    })
  }

  /**
   * render 
   */
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-200">
        <div className="card w-350 border-0 shadow">
          <div className="card-body">
            <p className="text-center"><b>User Management</b></p>
            <form onSubmit={handleSubmit(login)} autoComplete="off">
              <div className="form-group">
                <label htmlFor="usr">Email:</label>
                <input type="email" name="email" className="form-control" ref={register({
                  required: "Email id is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter valid email id"
                  }
                })}/>
                <p className="errors mt-2">{errors.email && errors.email.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" name="password" className="form-control" ref={register({
                  required: "Password is required",
                })}/>
                <p className="errors mt-2">{errors.password && errors.password.message}</p>
              </div>
              <div className="text-center">
                <button type="submit" className="border-0 btn w-100 btn-primary center">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>      
  );
}

export default Login;
