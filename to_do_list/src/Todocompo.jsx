import React, { useState } from 'react';

function Todocompo() {
  let [Tasks, setTask] = useState([]);
  let [newTask, setnewTask] = useState("");
  let [editIndex, setEditIndex] = useState(null); 
  let [editText, setEditText] = useState("");   

  function inputHandle(event) {
    setnewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask([...Tasks, newTask.trim()]);
      setnewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = Tasks.filter((_, i) => i !== index);
    setTask(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...Tasks];
      [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
      setTask(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < Tasks.length - 1) {
      const updateTasks = [...Tasks];
      [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
      setTask(updateTasks);
    }
  }

  function startEditTask(index) {
    setEditIndex(index);
    setEditText(Tasks[index]);
  }

  function handleEditChange(event) {
    setEditText(event.target.value);
  }

  function updateTask() {
    if (editText.trim() !== "") {
      const updatedTasks = [...Tasks];
      updatedTasks[editIndex] = editText.trim();
      setTask(updatedTasks);
      setEditIndex(null);
      setEditText("");
    }
  }

  function cancelEditTask() {
    setEditIndex(null);
    setEditText("");
  }

  return (
    <div className='to-do-list'>
      <h1>TO DO LIST PROJECT</h1>

      <div>
        <input
          type="text"
          value={newTask}
          placeholder='ENTER NEW TASK...'
          onChange={inputHandle}
        />
        <button className='add-button' onClick={addTask}>ADD TASK</button>
      </div>

      <ol>
        {Tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button className='btn1' onClick={updateTask}>Save</button>
                <button className='btn1'onClick={cancelEditTask}>Cancel</button>
              </div>
            ) : (
              <span className='text'>{task}</span>
            )}

            {editIndex !== index && (
              <button className='update' onClick={() => startEditTask(index)}>UPDATE</button>
            )}
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='moveup-button' onClick={() => moveTaskUp(index)}>☝</button>
            <button className='movedown-button' onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todocompo;
