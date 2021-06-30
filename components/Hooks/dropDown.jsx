import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
function dropDown({ title, items, multiselect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  function handleClick(items) {}
  return (
    <div>
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => Toggle(!open)}
        onClick={() => toggle(!open)}
      ></div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleClick(item)}></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
