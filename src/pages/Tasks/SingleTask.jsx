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

  <div ref={drag} className={`card my-5 cursor-grab  bg-gray-400 ${isDragging?"opacity-25":""} shadow-xl`}>
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      
    );
};

export default SingleTask;