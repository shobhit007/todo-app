import React from "react";
import Form from "./Form";
import ListItems from "./ListItem";

function AllItems({ onChange, list, updateTask }) {
  return (
    <div>
      <Form onChange={onChange} />
      {list.map((listItem) => (
        <ListItems
          item={listItem}
          key={listItem.id}
          handleClick={() => updateTask(listItem.id)}
        />
      ))}
    </div>
  );
}

export default AllItems;
