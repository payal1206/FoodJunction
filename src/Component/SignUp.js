import React, { useState } from "react";
import "./styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignUp(props) {
  // React States
  console.log("props", props.todos);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const signIn = (e) => {
    e.preventDefault();
    var { email, pass } = document.forms[0];
    createUserWithEmailAndPassword(auth, email.value, pass.value)
      .then((Credential) => {
        setIsSubmitted(true);
        console.log(Credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={signIn}>
        <div className="input-container">
          <label>E-mail </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            placeholder="Enter your password"
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div>
        <div className="title">Sign Up</div>

        {isSubmitted ? <div>Account is successfully created</div> : renderForm}
        {/* <NavLink to="/signup">Sign up</NavLink> */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state.signUpreducer.count);
  return {
    todos: state.signUpreducer
  };
};

export default connect(mapStateToProps)(SignUp);
