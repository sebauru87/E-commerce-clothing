import React from "react";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
// import {ReactComponent as Logo} from './icons8.png';
import logo from "./icons8.png";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className='logo' /> */}
        <img src={logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {currentUser.displayName} SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
        <CartIcon />
      </div>
        {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
