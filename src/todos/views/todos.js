import React from 'react';
import AddTodo from './addTodo.js';
import TodoLlist from './todoList';
import './style.css'

export default ()=>{
  return(
    <div className="todos">
      <AddTodo />
      <TodoLlist />
    </div>
  )
}
