import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [inputs, setInputes] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: ""
    })
    const [errors, setErrors] = useState(null)

    const handleChange = (e) => {
        setInputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/user/addUser", inputs);
            localStorage.setItem("fullName", res.data.fullName);
            localStorage.setItem("email", res.data.email);
            navigate("/")
        } catch (error) {
            setErrors(error)
        }

    }

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row ">
                    <div className="col-md-3 mx-auto">
                        <h4>Register</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleInputEmail1">Full Name</label>
                                        <input type="text" className="form-control" name='fullName' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fullName" />
                                    </div>
                                    <div className="form-group  mb-3">
                                        <label htmlFor="exampleInputPassword1">Email</label>
                                        <input type="email" className="form-control" name='email' onChange={handleChange} id="exampleInputPassword1" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleInputPassword1">Phone Number</label>
                                        <input type="number" className="form-control" name='phone' onChange={handleChange} id="exampleInputPassword1" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" name='password' onChange={handleChange} id="exampleInputPassword1" placeholder="Password" />
                                    </div>

                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Submit</button>
                                    {errors && <p>{errors}</p>}

                                    {/* goto login */}
                                    <div className="text-center mt-3">
                                        <Link to="/login">Already have an account?</Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register