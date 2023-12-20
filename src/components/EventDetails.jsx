import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../pages/Home/Header/Header";
const EventDetails = () => {
    useEffect(() => {  AOS.init();},[]);
  const all_events = useLoaderData();
  const { event_id } = useParams();
  const event_idInt = parseInt(event_id);

  const specific_event = all_events.find((ev) => ev.id === event_idInt);

  const { name, id, image, short_description, price, detailed_description } =
    specific_event;
  console.log("selected event", specific_event);
  console.log("all event", all_events);
  return (
    <div>
      <Header></Header>

      <div data-aos="fade-up"
     data-aos-duration="3000" className=" lg:max-w-6xl mx-5 lg:mx-auto mt-10  ">
     
        <div>
          <img className="w-full h-[500px] object-fill" src={image} />
        </div>
        <div className="mb-10" data-aos="fade-up"
     data-aos-duration="3000">
          <h1  className="text-4xl font-bold mt-5"> {name}</h1>

          <p className=" font-bold py-3">
            {price}
          </p>
          <p className="text-gray my-5 ">{detailed_description}</p>

          <button className="btn h-20 w-32 text-white bg-orange-600  ">Buy Service</button>

          <button className="btn h-20 w-32 text-white bg-orange-600 ms-10 ">Watch video</button>
        </div>


      </div>
    </div>
  );
};

export default EventDetails;
