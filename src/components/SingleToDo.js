import React, { Fragment, useState } from "react";

const SingleToDo = ({ todo, editTodo, deleteTodo }) => {
  //Declare States
  const [formData, setFormData] = useState({ data: "" });
  const [isEdit, setIsEdit] = useState(false);

  //Deconsturct
  const { data } = formData;

  //Form Actions
  const onChange = (e) => {
    setFormData({ ...formData, data: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(todo, formData.data);
    setIsEdit(false);

    //make funct call
  };

  //Button Actions
  const editHandler = () => {
    setIsEdit(true);
  };
  const editCancel = () => {
    setIsEdit(false);
  };
  const deleteHandler = (todo) => {
    deleteTodo(todo);
    //make func call
  };

  return (
    <Fragment>
      {isEdit ? (
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            name="todo"
            placeholder={todo}
            value={data}
            onChange={(e) => onChange(e)}
          />
          <input type="submit" value="Confirm" />
          <input type="button" value="Cancel" onClick={() => editCancel()} />
        </form>
      ) : (
        <div>
          <h4>{todo} </h4>
          <button onClick={() => editHandler()}>Edit</button>
          <button onClick={() => deleteHandler(todo)}>Delete</button>
        </div>
      )}
    </Fragment>
  );
};

export default SingleToDo;
