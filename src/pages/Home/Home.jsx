import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Event from "./Events/Event";
import Footer from "../../Shared/Footer";
import Positivereviews from "../../components/Positivereviews";
import Subscribe from "../../components/Subscribe";


const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((result) =>result.json()).then((data) =>setEvents(data))
    
      
   
      .catch((error) => console.log(error));
  }, []);


  console.log("ëvents are:",events );
  return (
    <div  >
      <Header></Header>
   
      <div className="bg-slate-300">
      <Banner></Banner>

      <div className="bg-red-500  flex items-center justify-center  h-20 my-10  text-white w-full">
      <h1 className="   text-center text-4xl font-bold ">Services</h1>
      </div>
   
    

    
   
      <div className="  grid pb-2 mt-20 gap-10 lg:max-w-6xl lg:mx-auto mx-5 grid-cols-1  lg:grid-cols-2">
     

{


events.map((event,idx) =><Event key={idx} event={event} > </Event> )
}



</div>
<Positivereviews></Positivereviews>

<div className=" ">
<Subscribe></Subscribe>

</div>



      </div>
      
       <Footer></Footer>

    </div>
  );
};

export default Home;
