import React , {useState} from "react";
import Child from "./Child";
const Parent = () =>{
    const [taskList, setTaskList] = useState([
        {key: 0, task: "Learn React", status: false},
        {key: 1, task: "Build a React app", status: false},
        {key: 2, task: "Deploy the React app", status: false},
    ]);

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child taskList = {taskList} setTaskList = {setTaskList}/>
        </div>
    )
}

export default Parent;