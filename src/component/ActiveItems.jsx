import React from "react";
import Form from "./Form";
import ListItem from "./ListItem";

function ActiveItems({ onChange, list, updateTask }) {
  const filteredList = list.filter((item) => !item.isCompleted);

  return (
    <div>
      <Form onChange={onChange} />
      {filteredList.map((listItem) => (
        <ListItem
          key={listItem.id}
          item={listItem}
          handleClick={() => updateTask(listItem.id)}
        />
      ))}
    </div>
  );
}

export default ActiveItems;
