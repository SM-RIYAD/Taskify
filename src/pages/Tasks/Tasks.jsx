import React from "react";
import SingleTask from "./SingleTask";

const dummy = ["task1", "task2", "task3"];

const Tasks = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 pt-32 text-gray gap-5">
      <div className="to-do bg-slate-400 border min-h-screen">  <h1>
        To Do Tasks
        </h1>
        {


dummy.map((task,idx)=><SingleTask key={idx} task={task}></SingleTask>)
        }
        
        </div>
      <div className="in-progress min-h-screen border bg-yellow-500"><h2>
        In Progress Tasks
        </h2></div> 
      <div className="completed min-h-screen border bg-teal-500 ">

        <h1>

            Completed Tasks
        </h1>
      </div>
    </div>
  );
};

export default Tasks;
