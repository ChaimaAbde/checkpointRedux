import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice/Todoslice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  });
  return (
    <div className="bigBox">
      <input
        className="inputt"
        placeholder="entre task title"
        style={{ marginRight: "100px" }}
        type={"text"}
        onChange={(e) => {
          setTask({ ...task, title: e.target.value });
        }}
      ></input>

      <input
        className="inputt"
        placeholder="entre task description"
        type={"text"}
        onChange={(e) => {
          setTask({ ...task, description: e.target.value });
        }}
      ></input>

      <button className="but" onClick={() => dispatch(addTask(task))}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
