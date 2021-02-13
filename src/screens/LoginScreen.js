import React, { useState } from 'react';
import './LoginScreen.scss';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        />
        <button
          className="loginScreen__button"
          onClick={() => {
            setSignIn(true);
          }}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Adress" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => {
                      setSignIn(true);
                    }}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
