import React, { Component } from "react";

import itemService from "../../services/item-service";
import Items from "../items/Items";

class Merchant extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  componentDidMount() {
    this._isMounted = true;

    itemService.getAll().then(data => {
      const items = data.data;
      if (this._isMounted) {
        this.setState({ items });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        {items.length === 0 && (
          <h1 className="cool-font">There are no items in this merchant!</h1>
        )}
        {items.length !== 0 && (
          <>
            <h1 className="text-center cool-font text-white mt-3">Merchant</h1>
              <table className="table bg-blur">
                <thead>
                  <tr>
                    <th scope="col" className="font-weight-bold">
                      Name
                    </th>
                    <th scope="col">Slot</th>
                    <th scope="col">Stamina</th>
                    <th scope="col">Strength</th>
                    <th scope="col">Attack</th>
                    <th scope="col">Defence</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody id="items-table">
                  <Items items={items} history={this.props.history} />
                </tbody>
              </table>
          </>
        )}
      </div>
    );
  }
}

export default Merchant;
