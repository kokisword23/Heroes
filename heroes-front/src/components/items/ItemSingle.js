import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import itemService from "../../services/item-service";

class ItemSingle extends Component {
    _isMounted = false;
  
    constructor(props) {
    super(props);

    this.state = {
        id: "",
      name: "",
      slot: "",
      stamina: 0,
      strength: 0,
      attack: 0,
      defence: 0,
      owned: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    itemService.addItemToUser(this.state.id);
    
    this.props.history.push("/home");
}

  componentDidMount() {
    this._isMounted = true;

    const {id, name, slot, stamina, strength, attack, defence, owned} = this.props.item;
    console.log(this.props.item);
    if (this._isMounted) {
        this.setState({id, name, slot, stamina, strength, attack, defence, owned});
    }
  }

  render() {
    const {
      name,
      slot,
      stamina,
      strength,
      attack,
      defence,
      owned
    } = this.state;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{slot}</td>
        <td>{stamina}</td>
        <td>{strength}</td>
        <td>{attack}</td>
        <td>{defence}</td>
        <td>
          {owned.toString() !== "true" && (
            <form onSubmit={this.handleSubmit}><input type="submit" className="btn btn-secondary" value="Buy" /></form>
          )}
        </td>
      </tr>
    );
  }
}

export default withRouter(ItemSingle);
