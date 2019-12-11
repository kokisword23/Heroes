import React from "react";
import IndexText from "../home/IndexText";
import RegisterForm from "../users/register/RegisterForm";

const IndexPage = ({register}) => {
  return (
    <div className="page-content-wrapper">
      <IndexText />
      <RegisterForm register={register}/>
    </div>
  );
};

export default IndexPage;
