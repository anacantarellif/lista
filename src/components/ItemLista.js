import React from 'react';
import Item from './Item';

const ItemList = ({ items, editItem, removeItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} id={index} item={item} editItem={editItem} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default ItemList;
