import React, { Component } from "react";

import Image from "../heroes/Image";
import "./itemForm.css";

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      slot: "",
      stamina: 0,
      strength: 0,
      attack: 0,
      defence: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, slot, stamina, strength, attack, defence } = this.state;
    const item = { name, slot, stamina, strength, attack, defence };
    this.props.create(item);
  }

  render() {
    return (
      <div className="contrainer">
        <form
          className="bg-blur justify-content-center w-75"
          onSubmit={this.handleSubmit}
        >
          <div>
            <div className="row">
              <div className="col col-md-3 mt-3">
                <label className="cool-font">
                  <h5>Name</h5>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control cool-font"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="col col-md-3 mt-3">
                <label className="cool-font">
                  <h5>Strength</h5>
                  <input
                    type="number"
                    placeholder="Strength"
                    className="form-control cool-font"
                    name="strength"
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="col col-md-3 mt-3">
                <label className="cool-font">
                  <h5> Stamina</h5>
                  <input
                    type="number"
                    placeholder="Stamina"
                    className="form-control cool-font"
                    name="stamina"
                    onChange={this.handleInputChange}
                    s
                  />
                </label>
              </div>
              <div className="col col-md-3 mt-3">
                <label className="cool-font">
                  <h5>Slot</h5>
                  <select
                    className="select"
                    name="slot"
                    onChange={this.handleInputChange}
                  >
                    <option selected disabled>
                      Choose an slot
                    </option>
                    <option value="HELMET">Helmet</option>
                    <option value="PAULDRON">Pauldron</option>
                    <option value="PADS">Pads</option>
                    <option value="GAUNTLETS">Gauntlets</option>
                    <option value="WEAPON">Weapon</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-4 mt-3">
                <label className="cool-font">
                  <h5>Attack</h5>
                  <input
                    type="attack"
                    placeholder="Attack"
                    className="form-control cool-font"
                    name="attack"
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="col col-md-4 mt-3">
                <label className="cool-font">
                  <h5>Defence</h5>
                  <input
                    type="number"
                    placeholder="Defence"
                    className="form-control cool-font"
                    name="defence"
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className="col col-md-4 mt-3">
                {this.state.slot !== "" && <Image slot={this.state.slot} />}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-secondary cool-font mt-2"
            value="Create Item"
          />
        </form>
      </div>
    );
  }
}

export default ItemForm;
