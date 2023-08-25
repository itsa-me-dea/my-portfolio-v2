import { useState } from 'react';
import './style.css';

function Contact() {
  // Here we set two state variables for firstName and name using `useState`
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    return name === setName(value);
  };
  
  const handleEmailChange = (e) => {
    const { email, value } = e.target;
    return email === setEmail(value);
  };

  const handleMessageChange = (e) => {
    const { message, value } = e.target;
    return message === setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
    setName('');
  };

  return (
    <div className="container text-center">
      <h1>
        Contact Me
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
          required
        />
        <div className="input-container">
          <textarea 
            className="custom-input"
            value={message}
            name="message"
            onChange={handleMessageChange}
            type="text" 
            placeholder="Enter your message"
          >
          </textarea>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
