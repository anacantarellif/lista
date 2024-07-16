import React, { useState } from 'react';

const Item = ({ id, item, editarItem, removerItem }) => {
  const [Editado, setEditado] = useState(false);
  const [newItem, setNovoItem] = useState(item);

  const handleEdit = () => {
    editarItem(id, newItem);
    setEditado(false);
  };

  return (
    <div>
      {Editado ? (
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
      ) : (
        <span>{item}</span>
      )}
      <button onClick={() => setEditado(!isEditing)}>
        {isEditing ? 'Salvar' : 'Editar'}
      </button>
      <button onClick={() => removerItem(id)}>Remover</button>
    </div>
  );
};

export default Item;
