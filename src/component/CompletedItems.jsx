import React from "react";
import ListItem from "./ListItem";

function CompletedItems({ list, removeTask, deleteAll }) {
  return (
    <>
      <div style={{ padding: "1.625em 0" }}>
        {list
          .filter((item) => item.isCompleted)
          .map((listItem) => (
            <ListItem
              key={listItem.display}
              item={listItem}
              onDelete={() => removeTask(listItem.id)}
              icon
            />
          ))}
      </div>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <button className="delete-all" onClick={deleteAll}>
          <span className="material-symbols-outlined">delete</span>delete all
        </button>
      </div>
    </>
  );
}

export default CompletedItems;
