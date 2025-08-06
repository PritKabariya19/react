import React, { useState } from "react";
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [semester, setSemester] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); 

  // Validate name on change
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length < 3 || value.length > 10) {
      setNameError('Name must be between 3 and 10 characters');
    } else {
      setNameError('');
    }
  };

  // Validate email on change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.endsWith("@gmail.com")) {
      setEmailError('Invalid email');
    }
    else if (value.length < 11) {
    setEmailError('Invalid email');
  }
     else {
      setEmailError('');
    }
  };

  // Validate password match on change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePasswords(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePasswords(password, value);
  };

  const validatePasswords = (pass, confirmPass) => {
    if (pass === '' || confirmPass === '') {
      setPasswordMessage('Please enter both passwords');
    } else if (pass === confirmPass) {
      setPasswordMessage('Passwords match');
    } else {
      setPasswordMessage('Passwords do not match');
    }
  };

  return (
    <>
      <h1>Register</h1>
      <div className="Box">
        
        <div>
          Name:
          <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange} />
          <p>{nameError}</p>
        </div>

        <div>
          Email:
          <input type="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} />
          <p>{emailError}</p>
        </div>

        <div>
          Mobile:
          <input type="number" placeholder="Enter Mobile" />
        </div>

        <div>
          Semester:
          <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)} >
            <option value="">Select</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
        </div>

        <div>
          Gender:
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
        </div>

        <div>
          Message:
          <textarea  id="message" name="message" rows="5" cols="40" placeholder="Enter Message"></textarea>
        </div>

        <div>
          Password:
          <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>
        </div>

        <div>
          Confirm Password:
          <input type="password" placeholder="Enter Password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
          <p>{passwordMessage}</p>
        </div>

        <div>
          I Agree Terms and Conditions
          <input type="checkbox" id="terms" name="terms" />
        </div>
        
      </div>
      <div style={{ display: 'flex', marginLeft: '600px' }} >
          <button type="submit" disabled={!name || !email || !password }>Submit</button>
        </div>
    </>
  );
}

export default Register;
