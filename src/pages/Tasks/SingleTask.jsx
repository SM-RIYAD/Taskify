import React from 'react';
import { useDrag } from 'react-dnd';

const SingleTask = ({task}) => {
    const selectedTask=task;
    // console.log("single task is",selectedTask)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:selectedTask,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    return (
        <div ref={drag} className={`border cursor-grab my-5 bg-black text-white ${isDragging?"opacity-25":""}`}>
            <h1>{task.name}</h1>
        </div>
    );
};

export default SingleTask;