import React, { Fragment, useEffect, useState } from "react";
import SingleToDo from "./SingleToDo";

const Todo = () => {
  // State Values
  const [mapKey, setMapKey] = useState(0);
  const [todos, setTodos] = useState([
    {
      text: "Do Something",
      key: -1,
    },
  ]);
  const [formData, setFormData] = useState({ text: "" });

  //Deconstruction
  const { text } = formData;

  //Form Actions
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text, key: mapKey }]);
    setMapKey(mapKey + 1);
    setFormData({ text: "" });
    console.log("added");
  };

  //Todo Actions
  const deleteTodo = (currentTodo) => {
    setTodos(todos.filter((todo) => todo.text !== currentTodo));
  };
  const editTodo = (currentTodo, newTodo) => {
    const tempTodos = todos.filter((todo) => todo.text !== currentTodo);
    tempTodos.unshift({ text: newTodo, key: mapKey });
    setTodos(tempTodos);
    setMapKey(mapKey + 1);
  };

  return (
    <Fragment>
      <h1>Simple React Task For EESTEC.net Team</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="text"
          placeholder="todo"
          value={text}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="Add Todo" />
      </form>
      <div>
        {todos.map((todo) => {
          const { text, key } = todo;
          return (
            <SingleToDo
              todo={text}
              key={key}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Todo;
