import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {selectVisibleTodos} from '../selector.js';
import TransitionGroup from 'react-addons-css-transition-group';
import './todoItem.css';

const log = (param) => () => console.log(param);


const TodoList = ({todos, log}) => {
  return (
    <ul className="todo-list">
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
        {
          todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              log={log}
              // log={(p) => log(p)}
            />
          ))
        }
      </TransitionGroup>
    </ul>
  );
};

TodoList.protoTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({log}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


