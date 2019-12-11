import React from "react";
import IndexText from "../home/IndexText";
import LoginForm from "../users/login/LoginForm";

const Login = ({login, isLogged}) => {
  return (
    <div className="page-content-wrapper">
      <IndexText />
      <LoginForm login={login} isLogged={isLogged} />
    </div>
  );
};

export default Login;
