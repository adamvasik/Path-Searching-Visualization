import React from 'react';
import  './footer.css';

import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/adamvasik" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icon'/>
        <p>My GitHub Page</p>
      </a>
    </footer>
  );
};

export { Footer };