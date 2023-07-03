import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo: (data: any) => void): void => {
  axios.get(baseUrl).then(({ data }) => {
    setToDo(data);
  });
};

const addToDo = (
  text: string,
  setText: (text: string) => void,
  setToDo: (data: any) => void
): void => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  toDoId: string,
  text: string,
  setToDo: (data: any) => void,
  setText: (text: string) => void,
  setIsUpdating: (isUpdating: boolean) => void
): void => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data: any) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id: string, setToDo: (data: any) => void): void => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
