import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const disable = formData.password !== formData.confirm;

  const handleSubmit = (evt) => { 
    evt.preventDefault()
    console.log(formData)};

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}></input>

            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}></input>

            <label>password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}></input>

            <label>confirm</label>
            <input type="password" name="confirm" value={formData.confirm} onChange={handleChange}></input>

            <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message" ></p>
    </div>
  );
}