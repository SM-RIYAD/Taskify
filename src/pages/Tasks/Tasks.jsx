import React from "react";
import SingleTask from "./SingleTask";
import { useDrop } from "react-dnd";
import TaskSection from "./TaskSection";
import TaskSection_Progress from "./TaskSection";
import Progress_section from "./TaskSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const todo_dummy = [
  { id: 1, name: "task1", type: "todo" },
  { id: 1, name: "task1", type: "todo" },
  { id: 3, name: "task3", type: "todo" },
];
const completed_dummy = [ { id: 4, name: "task4", type: "completed" }];
const inprogress_dummy = [{ id: 5, name: "task45", type: "inprogress" }];

const Tasks = () => {

const handleAdd=()=>{

}

  return (
    <div> 
      <div className="flex  w-full justify-center">

  <button
                        onClick={() => {
                            document.getElementById("my_modal_1").showModal();
                        }}
                        className="btn btn-primary mt-10 bg-slate-500 border-0"
                      >
                        {" "}
                        Create A Task{" "}
                      </button>
                      <dialog id="my_modal_1" className="modal">
                <ToastContainer />
                  <div className="modal-box">
                  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn  btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                  <form onSubmit={ handleAdd} className="card-body  ">
                  <div className="grid grid-cols-1 gap-2">
                <div className="form-control">
           
                  <label className="label">
                    <span className="label-text text-black">Review </span>
                  </label>
                  <textarea
                    type="text"
                    name="review_text"
                    // defaultValue={review.reviewcontent}
                    placeholder="User Name"
                    className="input input-bordered"
                    required
                  />
                       <textarea
                    type="text"
                    name="review_id"
                    // value={review._id}
                    placeholder="User Name"
                    className="input hidden input-bordered"
                    required
                  />
                </div>
           

             

        
                <div className="form-control ">
             
               <input
                  type="submit"
            
                  value="Update"
                  className="btn bg-red-500 mt-5 text-white border-none w-full  btn-primary"
                /> <div className="modal-action">
               
                </div>
              
                </div>

             
                
              
              </div>
              </form>
                    
                  </div>
                </dialog>
      </div>
   <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 text-gray gap-5">
     
     <TaskSection status="in todo" task_lists={todo_dummy}>  </TaskSection>
     <TaskSection status="in progress" task_lists={inprogress_dummy}>  </TaskSection>
     <TaskSection status="in completed" task_lists={completed_dummy}>  </TaskSection>
  
 </div>
    </div>
 
  );
};

export default Tasks;
