import React, { useState } from "react";
import "./styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { connect } from "react-redux";
import { login } from "./headerAction";

const Login = (props) => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const signIn = (e) => {
    e.preventDefault();
    var { email, pass } = document.forms[0];
    signInWithEmailAndPassword(auth, email.value, pass.value)
      .then((Credential) => {
        setIsSubmitted(true);
        props.loginf();
        console.log(Credential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Find user login info
  // const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  // if (userData) {
  //   if (userData.password !== pass.value) {
  //     // Invalid password
  //     setErrorMessages({ name: "pass", message: errors.pass });
  //   } else {
  //     setIsSubmitted(true);
  //   }
  // } else {
  //   // Username not found
  //   setErrorMessages({ name: "uname", message: errors.uname });
  // }
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={signIn}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Please Enter Your Email"
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            placeholder="Please Enter Your password"
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
        <div className="title">Sign In</div>
        {isSubmitted ? <div>You are successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginf: () => dispatch(login())
  };
};

const mapStateToProps = (state) => {
  console.log(state.signUpreducer.count);
  return {
    login: state.signInreducer.loggedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
