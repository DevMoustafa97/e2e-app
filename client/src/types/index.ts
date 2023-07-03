export interface ToDo {
  _id: string;
  text: string;
}
export type handleEdit = (item: ToDo) => void;
export type handleDelete = (id: ToDo["_id"]) => void;

export interface TodoItemProps {
  item: ToDo;
  handleEdit: (item: ToDo) => void;
  handleDelete: (id: ToDo["_id"]) => void;
}
