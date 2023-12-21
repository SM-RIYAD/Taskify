import React from 'react';
import { useDrop } from "react-dnd";
import SingleTask from './SingleTask';
const TaskSection = ({task_lists,status}) => {
    const handleDrop = (item) => {
        console.log("dropped item", item,status);
      };
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
    
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));
    return (
        <div ref={drop}  className="in-progress min-h-screen border bg-yellow-500 p-5">
        <h2>In {status} {task_lists.length}</h2>
        {task_lists.map((task, idx) => (
          <SingleTask key={idx} task={task}></SingleTask>
        ))}
      </div>
    );
};

export default TaskSection;