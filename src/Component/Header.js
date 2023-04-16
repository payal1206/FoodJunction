import "../styles.css";
import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { useId, useState } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { animated, useSpring } from "@react-spring/web";
import Login from "./login";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import { login, logout } from "./headerAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return <animated.div ref={ref}>{children}</animated.div>;
});
Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  console.log("edfrgthyju", props.login);

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div id="head-header">
      <div id="heading">
        <ul>
          <a href="https://lhmj3b.csb.app/addRestaurant">
            <Button>Add Restaurant</Button>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <div>
              {props.login == false && (
                <Button onClick={handleOpen1}>Login</Button>
              )}

              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open1}
                onClose={handleClose1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={open1}>
                  <Box sx={style}>
                    <Typography
                      id="spring-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <Login />
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <div>
              {props.login === false && (
                <Button onClick={handleOpen}>Sign Up</Button>
              )}
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="spring-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <SignUp />
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
