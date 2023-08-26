import React from 'react';
import kirbo from '../../images/kirbo-test.gif';

const centerText = {
  textAlign: 'center',
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
};

const imgStyle = {
  maxWidth: '500px', 
  marginBottom: '20px'
};

export default function About() {
  return (
    <div>
      <h1 style={centerText}>About Me</h1>
      <div className='about-container' style={flexContainer}>
        <img id="my-pic" src={kirbo} alt="kirbo" style={imgStyle} />
        <div>
          <p>Hi there. Hello!</p>
          <p>My name is Nhadea Lensky. I am a nerd for anything STEM or gaming related. I am new to the code game, but so far my experience has only made me more excited to learn. Thus far, I have dabbled in HTML, CSS, JavaScript and MERN stack development. I believe that I have a stronger understanding for front-end applications, but I am also comfortable with database management.</p>
          <p>I have been exposed to Matlab and Python, but it has been <i>years</i> since I have touched either of those. I am interested in pursuing more in computer science, but let's just see how entering and navigating this field goes.</p>
          <p>Keep on keeping on!</p>
        </div>
      </div>
    </div>
  );
}
