import React from 'react';

const Subscribe = () => {
    return (
        <div  className='bg-opacity-60' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',opacity:.9}} >
<div className="hero min-h-screen bg-opacity-60 hero-overlay  ">
  <div className="hero-content gap-10 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl px-5 text-white font-bold ">Subscribe for Event Updates!</h1>
      <p className="py-6 px-5 text-white">

As a subscriber, you enjoy the privilege of early access, ensuring you're at the forefront of our event lineup. Imagine attending exclusive galas, lively festivals, and intimate soirées, all tailored to ignite your passions and leave you in awe. Our community isn't just about events; it's about forging relationships with individuals who share your zest for life, your love for artistry, and your enthusiasm for celebration.

But that's not all – subscribers receive special privileges, including VIP seating, complimentary refreshments, and unique meet-and-greet opportunities. Plus, we'll keep you in the loop with event reminders, so you never miss a beat. Join us in this adventure of a lifetime, where every click of the 'Subscribe' button opens the door to a world of endless excitement.</p>
    </div>
    <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl  ">
      <form className="card-body pb-5 ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-bold text-white">To Subscribe,</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
   
        <div className="form-control mt-6">
          <button className="bg-red-600 btn-primary border-0 text-white btn">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Subscribe;