import React, { useState } from 'react';
import { addUser, getUsers } from './RegisterService';

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
        <div>
            <div className="form-container">
                <h2>Register</h2>
                <form className="registerform" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">UserName</label>
                        <input type="text" id="name" name="userName" placeholder="Enter your username" required />
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
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phoneNo" placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" placeholder="Enter your last name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="genders" required>
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
                </form>
            </div>
        </div>
    );
}

export default Register;
