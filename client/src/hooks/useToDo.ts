import { useState, useEffect } from "react";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "../api";
import { ToDo } from "../types";

const useToDo = () => {
  const [toDo, setToDo] = useState<ToDo[]>([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };

  const handleAddToDo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addToDo(text, setText, setToDo);
  };

  const handleUpdateToDo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
  };

  const handleDeleteToDo = (_id: string): void => {
    deleteToDo(_id, setToDo);
  };

  const handleEditToDo = (item: ToDo): void => {
    setIsUpdating(true);
    setText(item.text);
    setToDoId(item._id);
  };

  return {
    toDo,
    text,
    isUpdating,
    handleTextChange,
    handleAddToDo,
    handleUpdateToDo,
    handleDeleteToDo,
    handleEditToDo,
  };
};

export default useToDo;
