import React, { useState } from 'react';
import './ListComponent.css';

const ListComponent = ({ items, title, renderItem, renderEmptyState }) => {
  // Render items conditionally based on the items array
  const renderListItems = () => {
    if (items.length === 0) {
      if (renderEmptyState) {
        return renderEmptyState();
      } else {
        return <li>Lista vazia</li>;
      }
    } else {
      return items.map((item, index) => (
        <li
          key={index}
          className="list-item"
          onMouseEnter={() => setHoverItem(index)}
          onMouseLeave={() => setHoverItem(-1)}
        >
          {renderItem ? renderItem(item) : item}
        </li>
      ));
    }
  };

  const [hoverItem, setHoverItem] = useState(-1); // State to track hovered item index

  return (
    <div className="list-component">
      {title && <h2>{title}</h2>}
      <ul className="list">
        {renderListItems()}
      </ul>
    </div>
  );
};

export default ListComponent;
