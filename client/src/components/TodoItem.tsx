import React from "react";
import { TodoItemProps } from "../types";

const TodoItem = ({ item, handleEdit, handleDelete }: TodoItemProps) => {
  return (
    <li key={item._id}>
      <span>{item.text}</span>
      <button onClick={() => handleEdit(item)}>Edit</button>
      <button onClick={() => handleDelete(item._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
