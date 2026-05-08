import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default function Register() {
    let api=axios.create({
        baseURL:"https://turbo-space-pancake-wr4r5px97w7pc5qwg-3000.app.github.dev/user"
    })
    const [user,setUser]= useState({username:"",password:""});
    const handlechange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const submitbutton =(e)=>{
        e.preventDefault();
     api({
  url:"/register",
  method:"POST",
  data:{
    ...user,
    id: Date.now()
  }
}).then(() => {
        alert("User Created ");

      })
      .catch((err) => console.log(err));
        console.log(user);
        
    }
    
    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background:
                    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="card bg-dark text-light p-4 shadow-lg border-0 rounded-4"
                style={{ width: "380px" }}
            >
                {/* Heading */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">
                        Register
                    </h2>

                    <p className="text-secondary">
                        Welcome back to MovieHub 🎬
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={submitbutton}>

                    {/* Username */}
                    <div className="mb-3">
                        <label className="form-label">
                            Username
                        </label>

                        <input name="username" value={user.username} onChange={handlechange}
                            type="text"
                            className="form-control bg-secondary bg-opacity-25 border-0 text-light"
                            placeholder="Enter username"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                           name="password"
                           value={user.password}
                           onChange={handlechange}
                            type="password"
                            className="form-control bg-secondary bg-opacity-25 border-0 text-light"
                            placeholder="Enter password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-100 text-white fw-bold"
                        style={{
                            background: "linear-gradient(90deg,#ff4d4d,#ff1a1a)",
                            border: "none",
                        }}
                    >
                        Login
                    </button>
                </form>

                {/* Bottom Text */}
                <p className="text-center text-secondary mt-4 mb-0">
                    Don’t have an account?{" "}

                    <Link
                        to="/login"
                        className="text-decoration-none fw-semibold"
                        style={{ color: "#ff4d4d" }}
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}