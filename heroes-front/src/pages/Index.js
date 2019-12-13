import React from "react";
import IndexText from "../components/home/IndexText";
import RegisterForm from "../components/users/register/RegisterForm";

const IndexPage = ({register}) => {
  return (
    <div className="page-content-wrapper">
      <IndexText />
      <RegisterForm register={register}/>
    </div>
  );
};

export default IndexPage;
