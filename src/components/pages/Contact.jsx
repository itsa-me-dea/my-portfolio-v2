import { useState } from 'react';
import './style.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    setNameError(false); // Clear the error when the user starts typing
  };
  
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(false); // Clear the error when the user starts typing
  };

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError(true);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    if (!name) {
      setNameError(true);
      return;
    }
    alert(`Hello ${name}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  const isValidEmail = (email) => {
    // Regular expression pattern for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleNameChange}
          onBlur={handleNameBlur} // Add onBlur event handler
          type="text"
          placeholder="Name"
          required
        />
        {nameError && <div className="error">Name is required</div>}
        <input
          value={email}
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur} // Add onBlur event handler
          type="email"
          placeholder="Email"
          required
        />
        {emailError && <div className="error">Valid email is required</div>}
        <div className="input-container">
          <textarea 
            className="custom-input"
            value={message}
            name="message"
            onChange={handleMessageChange}
            placeholder="Enter your message"
          >
          </textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
