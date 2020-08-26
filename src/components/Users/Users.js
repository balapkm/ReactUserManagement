import React, {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  useHistory
} from "react-router-dom";

import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser
} from "../../services/UserServices";

import {
  useForm
} from "react-hook-form";

import {
  loadUsers
} from "../../actions/UsersAction";

import './Users.css';
const $ = require('jquery');
$.DataTable = require('datatables.net');
/**
 * Users
 */
function Users() {

  const [ modelType, setModelType ] = useState('Add');
  const [updateId, setUpdateId] = useState(0);
  const inputEl = useRef();
  const modelRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    errors,
    watch,
    setValue
  } = useForm();

  const users = useSelector(
    state => state.usersReducer.users
  , shallowEqual);

  /**
   * fetch users
   */
  const fetchUsers = () => {
    getUsers().then(res => {
      dispatch(loadUsers(res))
      $(inputEl.current).DataTable();
    });
  };

  /**
   * use effects
   */
  useEffect(() => {
    fetchUsers();

    let user = window.localStorage.getItem('user');
    if (!user) {
      history.push("/");
    }
  }, []);

  /**
   * add user     
   * @param {*} values 
   */
  const addUsers = values => { 
    delete values.cpassword;

    if(modelType === 'Add') {
      addUser(values).then((res) => {
        alert('User Added successfully...');
        fetchUsers();
        openHideModal('Add','hide');
      })
    } else {
      updateUser(values,updateId).then((res) => {
        alert('User Updated successfully...');
        fetchUsers();
        openHideModal('Update','hide');
      })
    }
  };

  /**
   * Open hide model
   * @param {*} modelType 
   * @param {*} type 
   */
  const openHideModal = (modelType='show',type = 'show') => {
    $(modelRef.current).modal(type);
    (modelType === 'show') ? setModelType('Add'): setModelType('Update');
  }

  /**
   * update open model
   * @param {*} data 
   */
  const updateOpenModel = (data) => {
    openHideModal('Update','show');
    setUpdateId(data.id);
    for(let x in data) {
      if(x !== 'password')
        setValue(x, data[x]);
    }
  }

  /**
   * delete single user
   * @param {*} data 
   */
  const deleteSingleUser = (data) => {
    const confirm = window.confirm("Are you want delete this user?");
    if(confirm) {
      deleteUser(data.id).then((res) => {
        alert('User Deleted successfully...');
        fetchUsers();
        openHideModal('Update', 'hide');
      })
    }
  }

  /**
   * log out
   */
  const logout = () => {
    window.localStorage.removeItem('user');
    history.push('/');
  }

  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a className="navbar-brand d-flex align-items-center">
              <strong>User Management</strong>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item text-right">
                <a className="nav-link" href="#" onClick={() => logout()}>Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="container mt-4 mb-4">
        <div className="text-right mb-2">
          <button type="button" className="btn fs-16 btn-outline-primary" onClick={() => openHideModal()}>Add User</button>
        </div>
        <table ref={inputEl} className="table fs-16 table-striped table-bordered w-100">
          <thead>
              <tr className="text-center">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {users.map((user,i) => (
              <tr key={i}>
                  <td>{user.userName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <button type="button" onClick={()=> {updateOpenModel(user)}} className="btn btn-sm btn-outline-warning" >Edit</button>
                    <button type="button" onClick={()=> {deleteSingleUser(user)}}className="btn btn-sm btn-outline-danger ml-2">Delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="modal fade" ref={modelRef}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit(addUsers)} autoComplete="off">
                <div className="modal-header">
                  <h5 className="modal-title">{modelType} User</h5>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                <div className="modal-body fs-16">
                    <div className="form-group">
                      <label htmlFor="usr">User name</label>
                      <input type="text" name="userName" className="form-control" ref={register({
                        required: true
                      })}/>
                      <p className="errors mt-2">{errors.userName && 'User Name is required'}</p>
                    </div>
                    
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="usr">Age</label>
                          <input type="number" name="age" className="form-control" ref={register({
                              required: 'Age is required',
                              min: {
                                value: 1,
                                message : 'Mininum age value is 1'
                              },
                              max: {
                                value: 99,
                                message: 'Max age value is 99'
                              }
                            })}/>
                            <p className="errors mt-2">{errors.age && errors.age.message}</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="usr">Gender</label>
                          <select className="form-control" name="gender" ref={register({
                              required: true
                            })}>
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <p className="errors mt-2">{errors.gender && 'Gender is required'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usr">Email</label>
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
                        <label htmlFor="usr">Phone No</label>
                        <input type="text" name="phoneNumber" className="form-control" ref={register({
                          required: "Phone number is required",
                          minLength: {
                            value: 10,
                            message: "Enter valid phone number(Min 10)"
                          },
                          maxLength: {
                            value: 10,
                            message: "Enter valid phone number(Max 10)"
                          }
                        })}/>
                        <p className="errors mt-2">{errors.phoneNumber && errors.phoneNumber.message}</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="usr">Password</label>
                          <input type="password" name="password" autoComplete="off" className="form-control" ref={register({
                            required: "Password is required",
                          })}/>
                          <p className="errors mt-2">{errors.password && errors.password.message}</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="usr">Confirm Password</label>
                          <input type="password" name="cpassword" autoComplete="off" className="form-control" ref={register({
                            required: "Confirm Password is required",
                            validate: (value) => value === watch('password') || "Confirm Password doesn't match with password"
                          })}/>
                          <p className="errors mt-2">{errors.cpassword && errors.cpassword.message}</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="modal-footer">
                  {modelType === 'Add' ? 
                  <button type="submit" className="btn btn-success">Add</button>
                  :
                  <button type="submit" className="btn btn-success">Update</button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Users;
