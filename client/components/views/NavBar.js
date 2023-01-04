import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/users";
import { connect } from "react-redux";

const NavBar = (handleClick) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* <a href="#" onClick={handleClick}>
            Logout
          </a> */}
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up!</Link>
        </li>
        <li>
          <Link to="/pear">Pear</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavBar);
