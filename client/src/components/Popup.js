import React from 'react'
import { FaTimes } from "react-icons/fa";

const Popup = (props) => {
    
  return (
    <div className="popup">
          <div className="closePopup" onClick={() => props.setPopupActive(false)}><FaTimes /></div>
          <div className="content">
            <h3>Add Task</h3>
            <input 
            type="text" 
            className="add-todo-input" 
            onChange={e => props.setNewTodo(e.target.value)}
            value={props.newTodo}
            />
            <div className="button" onClick={props.addTodo}>Create Todo</div>
          </div>
        </div>
  )
}

export default Popup