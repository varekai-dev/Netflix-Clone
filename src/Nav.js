import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'} `}>
      <div className="nav__content">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
          alt="netflix"
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
