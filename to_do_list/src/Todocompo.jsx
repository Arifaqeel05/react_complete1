import React ,{useState} from 'react'

function Todocompo() {
    let [Tasks, setTask]=useState([]);
    let [newTask, setnewTask]=useState(" ");


    function inputHandle(event){
        setnewTask(event.target.value)

    }

    function addTask(){

        if(newTask.trim()!==""){
            setTask([...Tasks,newTask]);
            newTask(" ");

        }
        

    }

    function deleteTask(index){

        const updateTasks= Tasks.filter((_, i)=> i!==index);
        setTask(updateTasks);

    }

    function moveTaskUp(index){
        if(index>0){
            const updateTasks=[...Tasks];
            [updateTasks[index],updateTasks[index-1]]=[updateTasks[index-1],updateTasks[index]];

            setTask(updateTasks);
        }

    }

    function moveTaskDown(index){

        if(index<Tasks.length-1){
            const updateTasks=[...Tasks];
            [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1],updateTasks[index]];

            setTask(updateTasks);
        }


    }

  return (
    <div className='to-do-list'>
        <h1>
            TO DO LIST PROJECT
        </h1>

        <div>
            <input type="text" name={newTask} placeholder='ENTER NEW TASK...' onChange={inputHandle}  />

            <button className='add-button' onClick={addTask}>ADD TASK</button>

        </div>

        <ol>
            {Tasks.map((task, index)=>
            <li key={index}>
                <span className='text'>
                    {task}
                </span>

                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>

                <button className='moveup-button' onClick={()=>moveTaskUp(index)}>☝</button>

                <button className='movedown-button' onClick={()=>moveTaskDown(index)}>👇</button>

                
            </li>
            )}
        </ol>
      
    </div>
  )
}

export default Todocompo
