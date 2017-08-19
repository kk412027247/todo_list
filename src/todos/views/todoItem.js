import React from 'react';
import PropTypes from 'prop-types';


const TodoItem =({onToggle,onRemove,completed,text,_id})=>{
  const checkedProp=completed ? {checked:true} : {};
  return(
    <li
      className="todo-item"
      style={{
          textDecoration:completed ? 'line-through' : 'none'
      }}
    >
      <input id={_id} type="checkbox" {...checkedProp} className="toggle" readOnly onClick={onToggle}  />
      <label htmlFor={_id} className="text"> {text} </label>
      <button className="remove" onClick={onRemove}>X</button>
    </li>
  )
};

TodoItem.propTypes={
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
} ;

export default TodoItem;
