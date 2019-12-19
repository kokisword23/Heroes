import React from "react";
import ItemSingle from "./ItemSingle";
import Spinner from "../layout/Spinner.js";

const Items = ({ items, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  console.log(items);

  return (
    <>
      {items.map(item => (
        <ItemSingle key={item.name} item={item} />
      ))}
    </>
  );
};

export default Items;
