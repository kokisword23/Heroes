import React from "react";
import IndexText from "../components/home/IndexText";
import LoginForm from "../components/users/login/LoginForm";

const Login = ({login, isLogged, handler}) => {
  return (
    <div className="page-content-wrapper">
      <IndexText />
      <LoginForm login={login} handler={handler} isLogged={isLogged} />
    </div>
  );
};

export default Login;
