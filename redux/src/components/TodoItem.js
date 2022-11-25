import React from "react";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/todoSlice/Todoslice";
import EditTask from "./EditTask";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <span onClick={() => dispatch(doneTask({ id: todo.id }))}>
          {todo.isDone ? "Done" : "Not Done"}
        </span>
      </div>
      <EditTask id={todo.id} />
      <button
        className="bbt"
        onClick={() => dispatch(removeTask({ id: todo.id }))}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
