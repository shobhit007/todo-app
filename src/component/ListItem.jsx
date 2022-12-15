import React from "react";

function ListItem({
  item: { data, isCompleted },
  handleClick,
  onDelete,
  icon,
}) {
  return (
    <div className="list-item">
      <div className="left">
        <input
          type="checkbox"
          className="list-item__checkbox"
          checked={isCompleted}
          onChange={handleClick}
        />
        <p
          className="list-item__text"
          style={{ textDecoration: isCompleted && "line-through" }}
        >
          {data}
        </p>
      </div>
      {icon && (
        <button
          className="material-symbols-outlined delete-icon"
          onClick={onDelete}
        >
          delete
        </button>
      )}
    </div>
  );
}

export default ListItem;
