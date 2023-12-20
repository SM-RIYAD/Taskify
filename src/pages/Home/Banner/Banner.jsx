import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
          <div className="hero min-h-screen bg-cover" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1060&t=st=1703096138~exp=1703096738~hmac=beafbe06f1d301073361317dcbedd2846126bc6f69d1e739e5251a05a5fff0d2'}}>
  <div className="hero-overlay  bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-white font-bold">Manage Your Tasks</h1>
      <p className="mb-5">Elevate your events to new heights with our innovative event management platform! We understand the importance of creating unforgettable moments, and that's why we're here to make your event planning journey seamless and stress-free.</p>
      
      <Link to={"/register"}>  <button className="btn bg-red-600 btn-primary border-0 text-white">Register</button></Link>
    
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;