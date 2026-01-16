import React, { useState } from "react";
import './ToDo.css'

function ToDo () {
 let [todolist,setTodoList]=useState([])


let saveToDoList=(event)=>{

  
    let ToDoname =event.target.ToDoname.value;
    if(!todolist.includes(ToDoname)){
let finalDolist =[...todolist,ToDoname]
 setTodoList(finalDolist)
    }
    else{
        alert("ToDo name already exist...")
    }

    event.preventDefault();
}
let list=todolist.map((value,index)=>{
    return(
   <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodoList={setTodoList}/>
    )
})
  return <div>
    <h1>ToDo List</h1>
    <form onSubmit={saveToDoList}>
        <input type="text" name="ToDoname"/>  <button>Save</button>
    </form>
    <div className="outerDiv">
    <ul>
      {list}
    </ul>
    </div>
  </div>;
};

export default ToDo;
function ToDoListItems({value,indexNumber,todolist,setTodoList}){
   let [status,setStatus]=useState(false)
    let deleteRow = ()=>{
       let finalData=todolist.filter((v,i)=>i!=indexNumber)
     setTodoList(finalData)
    }
    let checkStatus=()=>{
 setStatus(!status)
    }
    return(
        <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{indexNumber + 1}  {value} <span onClick={deleteRow}>&times;</span></li>
    )
}
