import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';


class TodoItem extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps.log === this.props.log)
  }


  render() {
    const {onToggle, onRemove, completed, text, id, log} = this.props;
    return (
      <li
        className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <input
          id={id}
          type="checkbox"
          checked={completed ? 'checked' : false}
          className="toggle" readOnly onClick={onToggle}
        />
        <label htmlFor={id} className="text"> {text} </label>
        <button className="remove" onClick={onRemove}>X</button>
      </li>
    )
  }
}


TodoItem.propTypes = {
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => {
      dispatch(toggleTodo(id));
      ownProps.log(id)
    },
    onRemove: () => dispatch(removeTodo(id)),
  }
};

export default connect(null, mapDispatchToProps)(TodoItem);
