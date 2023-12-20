import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";

import Footer from "../../Shared/Footer";



const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((result) =>result.json()).then((data) =>setEvents(data))
    
      
   
      .catch((error) => console.log(error));
  }, []);



  return (
    <div  >
      <Header></Header>
   
      <div className="">
      <Banner></Banner>


    
   
      <div className="  grid pb-2 mt-20 gap-10 lg:max-w-6xl lg:mx-auto mx-5 grid-cols-1  lg:grid-cols-2">
     



</div>



      </div>
      
       <Footer></Footer>

    </div>
  );
};

export default Home;
