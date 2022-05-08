import React, {useState} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";



function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [errorMessage, setErrorMessage] = useState(false)

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

 
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (event.target.value.length <= 0){
      setErrorMessage(true)
    }
    if(event.target.value.length > 0){
      setErrorMessage(false)
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

 
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder= "Cortar la cebolla oara el almuerzo"
        name='toDo'
      />
      <label className="errorMessage">
        { errorMessage ? " No deberias enviar info vacio"  : " " }
      </label>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
            <GoThumbsdown/>
         Cancelar
         
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          onclic

        >
          <GoThumbsup/>
          Añadir
          
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
