import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="pb-20">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'}}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-white font-bold">Manage Social Events</h1>
      <p className="mb-5">Elevate your events to new heights with our innovative event management platform! We understand the importance of creating unforgettable moments, and that's why we're here to make your event planning journey seamless and stress-free.</p>
      
      <Link to={"/register"}>  <button className="btn bg-red-600 btn-primary border-0 text-white">Register</button></Link>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;