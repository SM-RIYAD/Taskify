import React from 'react';
import { useDrag } from 'react-dnd';
import Swal from 'sweetalert2';

const SingleTask = ({task,refetch}) => {



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Job has been deleted.", "success");
              // const remaining = jobs.filter(job => job._id !== id);
              // setJobs(remaining);

              refetch();
            }
          });
      }
    });
  };
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
    <h2 className="card-title">{task.task_title}</h2>
    <p>{task.task_description}</p>
    <button className='btn btn-outline btn-xs'>{task.task_Priority}  </button>
    <p><i> Deadline: {task.task_deadline}</i></p>
    <div className="card-actions justify-end">
      <button onClick={()=> handleDelete(task._id)} className="btn btn-xs btn-error">Delete</button>
      <button className="btn btn-xs btn-warning">Edit</button>
    </div>
  </div>
</div>
      
    );
};

export default SingleTask;