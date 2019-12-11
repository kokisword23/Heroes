import React, { Component } from "react";

import "./create.css";
import MaleImg from "../../../male.jpg";
import FemaleImg from "../../../female.jpg";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", gender: "", genderText: "" };

    this.ref = React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imageClickFemale = this.imageClickFemale.bind(this);
    this.imageClickMale = this.imageClickMale.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { gender, name } = this.state;
    const hero = { name, gender };
    this.props.create(hero);
  }

  imageClickMale(event) {
    this.setState({ gender: "MALE", genderText:'Male'});
  }

  imageClickFemale(event) {
    this.setState({ gender: "FEMALE", genderText: "Female" });
  }
  render() {
    return (
      <div className="row">
        <form className="bg-blur justify-content-center w-50" onSubmit={this.handleSubmit}>
          <h3 className="cool-font">
            Choose gender: {this.state.genderText}
          </h3>
          <div className="row form-group">
            <div className="d-flex justify-content-center">
              <img
                src={MaleImg}
                alt="Male avatar"
                height="350px"
                width="250px"
                onClick={this.imageClickMale}
                ref={this.ref}
              />
            </div>
            <span style={{ visibility: "hidden" }}>...</span>
            <div className="d-flex justify-content-center">
              <img
                src={FemaleImg}
                alt="Female avatar"
                height="350px"
                width="250px"
                onClick={this.imageClickFemale}
                ref={this.ref}
              />
            </div>
          </div>
          <div className="form-group">
            <h3 className="cool-font">Enter name: </h3>
            <input
              type="text"
              placeholder="Hero name"
              className="form-control cool-font"
              name="name"
              onChange={this.handleInputChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-secondary cool-font mt-2"
            value="Create hero"
          />
        </form>
      </div>
    );
  }
}

export default Create;
