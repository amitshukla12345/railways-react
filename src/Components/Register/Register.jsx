import React, { useState } from 'react';
import { addUser, getUsers } from './RegisterService';
import { Link } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        addUser({
            userName: e.target.userName.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            age: e.target.age.value,
            genders: e.target.genders.value,
            phoneNo: e.target.phoneNo.value,
        }).then((data) => {
            setUser(data);
            alert('User registered successfully!');
        }).catch((error) => {
            console.error('Error registering user:', error);
            alert('Failed to register user.');
        });
    };

    return (
        <div id="user-section">
            <div className="user-form"> {/* Changed class to className */}
                <div>
                    <div className="form-container">
                        <h2>Register</h2>
                        <form className="registerform" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="userName">UserName</label> {/* Updated htmlFor */}
                                <input type="text" id="userName" name="userName" placeholder="Enter your username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNo">Phone Number</label> {/* Updated htmlFor */}
                                <input type="tel" id="phoneNo" name="phoneNo" placeholder="Enter your phone number" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label> {/* Updated htmlFor */}
                                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label> {/* Updated htmlFor */}
                                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genders">Gender</label> {/* Updated htmlFor */}
                                <select id="genders" name="genders" required>
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" name="age" placeholder="Enter your age" min="1" required />
                            </div>
                            <div className="form-group rg">
                                <button type="submit">Register</button>
                            </div>
                            <p>
        If you already have an account?{" "}
        <Link to="/Login">
          Login here
        </Link>
      </p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
