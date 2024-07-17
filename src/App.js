import React, { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemLista';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (id, newItem) => {
    setItems(items.map((item, index) => (index === id ? newItem : item)));
  };

  const removeItem = (id) => {
    setItems(items.filter((_, index) => index !== id));
  };

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem} />
      <ItemList items={items} editItem={editItem} removeItem={removeItem} />
    </div>
  );
};

export default App;
