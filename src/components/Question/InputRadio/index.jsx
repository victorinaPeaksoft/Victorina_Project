import React from "react";

export const InputRadio = ({ item, checked, onChangeHandler }) => {
  return (
    <div>
      <li>
        <label id={`${item.key}`} value={item.key}>
          <input
            type="radio"
            id={`${item.key}`}
            value={item.key}
            checked={checked}
            onChange={onChangeHandler}
          />
          {item.variant}
        </label>
      </li>
    </div>
  );
};
