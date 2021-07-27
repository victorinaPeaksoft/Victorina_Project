import React from "react";

export const InputRadio = ({ item, checked, onChangeHandler }) => {
  return (
    <div>
      <li>
        <label
          id={`${item.key}`}
          value={item.key}
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            id={`${item.key}`}
            style={{ marginRight: "15px" }}
            value={item.key}
            checked={checked}
            onChange={onChangeHandler}
            style={{ marginRight: "12px", cursor: "pointer" }}
          />
          <span className="item_variant">{item.variant}</span>
        </label>
      </li>
    </div>
  );
};
