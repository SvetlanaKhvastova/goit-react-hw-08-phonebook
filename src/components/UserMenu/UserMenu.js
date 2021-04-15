import React from "react";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import defaultAvatar from "./linux-avatar.jpg";
import { Button } from "react-bootstrap";
import s from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="" width="32"></img>
      <span className={s.span}>Welcome, {name}</span>
      <Button variant="primary" type="submit" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
