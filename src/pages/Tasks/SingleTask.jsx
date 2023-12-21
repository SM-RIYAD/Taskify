import React from 'react';
import { useDrag } from 'react-dnd';

const SingleTask = ({task}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
    return (
        <div ref={drag} className='border my-5 bg-black text-white'>
            <h1>{task}</h1>
        </div>
    );
};

export default SingleTask;