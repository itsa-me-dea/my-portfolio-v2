import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '30px 20px 20px 0px',
  textAlign: 'center',
};

const iconStyle = {
  margin: '10px',
};

function MyFooter() {
  return (
    <footer style={footerStyle}>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/nhadea-lensky-567158210/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/itsa-me-dea" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>

      {/* Stack Overflow */}
      <a href="https://stackoverflow.com/users/21659831/its-a-me-dea" target="_blank" rel="noopener noreferrer" style={iconStyle}>
      <FontAwesomeIcon icon={faStackOverflow} size="2xl" />      
      </a>
    </footer>
  );
}

export default MyFooter;
