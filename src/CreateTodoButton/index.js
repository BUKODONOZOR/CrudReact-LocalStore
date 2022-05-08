import React from 'react';
import './CreateTodoButton.css';
import { FaPlus } from "react-icons/fa";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <FaPlus/>
    </button>
  );
}

export { CreateTodoButton };
