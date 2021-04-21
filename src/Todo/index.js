import React, {useState} from 'react';

const Todo = () => {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])

  const onChange = (event) => setItem(event.target.value)

  const onClick = () => {
    setItem('');
    setItems([...items, item])
  }

  return (
    <>
      <input value={item} onChange={onChange} />
      <button onClick={onClick}>Add todo</button>
      {items.map((each, index) => <div key={index}>{each}</div>)}
    </>)
};

export default Todo;
