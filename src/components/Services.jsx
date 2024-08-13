import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    // <>
    <div id="My Services">
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            {/* <i class=" text-5xl fa-brands fa-aws"></i> */}
            {/* <i class="fa-solid fa-code"></i> */}
            <i class=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
            <b>Services Provided:- </b>
              Custom App Development,API Development & Integration,Microservices Architecture,Cloud Deployment,Database Management,Maintenance & Support. 
            </p>
            <p>
            <b>Key Benefits:- </b>
              Rapid Development,
              Scalability,
              Security,
              High Performance.              
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            {/* <i class=" text-5xl fa-solid fa-mobile"></i> */}
            <i class="fa-solid fa-database"></i>
            <h1 className="text-4xl">Database </h1>
            <p>
            <b>Services Provided:- </b>
              Database Design & Architecture,
              Database Development,
              Performance Optimization,
              Data Migration,
              Backup & Recovery,
              Maintenance & Support .            
            </p>
            <p>
            <b>Key Benefits:- </b>
              Robust Data Management
              High Performance
              Scalability
              Security             
            </p>
            
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            {/* <i class=" text-5xl fa-solid fa-server"></i> */}
            <i class="fa-solid fa-code"></i>
            <h1 className="text-4xl">Frontend Development</h1>
            <p>
              <b>Services Provided:- </b>
              Custom Frontend Development,
              UI/UX Design,
              Responsive Web Design,
              SPA Development,
              Frontend Performance Optimization,
              Maintenance & Support.
            </p>
            <p>
              <b>Key Benefits:- </b>
              User-Friendly Interfaces,
              Cross-Platform Compatibility,
              High Performance,
              Modern Design.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>  
    // </>
  );
};

export default Services;
