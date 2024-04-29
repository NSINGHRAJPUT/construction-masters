"use client";

import Image from "next/image";
import consulation from "../../assets/s2.png";
import construction from "../../assets/s1.png";
import maintenance from "../../assets/s3.png";

const Services = () => {
  return (
    <div id="services" className="px-[2.5%] m-auto my-[10vh]">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-[#EC9706]">Services</h2>
        <h1 className="text-4xl font-bold mb-2">
          Building Dreams, Crafting Realities
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-8">
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[300px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={consulation}
              alt="Consultation Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Consultation Services</h3>
            <ul className="text-[#EC9706] list-disc pl-5">
              <li>
                <span className="text-black">Design & Build</span>
              </li>
              <li>
                <span className="text-black">Cost Analysis</span>
              </li>
              <li>
                <span className="text-black">Permit & Processes</span>
              </li>
              <li>
                <span className="text-black">Scheduling</span>
              </li>
              <li>
                <span className="text-black">Phasing</span>
              </li>
              <li>
                <span className="text-black">Resource Management</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[300px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={construction}
              alt="General Construction"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">General Construction</h3>
            <ul className="text-[#EC9706] list-disc pl-5">
              <li>
                <span className="text-black">New Construction</span>
              </li>
              <li>
                <span className="text-black">Building Addition</span>
              </li>
              <li>
                <span className="text-black">Rennovation</span>
              </li>
              <li>
                <span className="text-black">Restoration</span>
              </li>
              <li>
                <span className="text-black">Rebuilding from Drainage</span>
              </li>
              <li>
                <span className="text-black">Drainage</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[300px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={maintenance}
              alt="Maintenance Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Maintenance Services</h3>
            <ul className="text-[#EC9706] list-disc pl-5">
              <li>
                <span className="text-black">Windows & Doors Fitting</span>
              </li>
              <li>
                <span className="text-black">Siding Repairs</span>
              </li>
              <li>
                <span className="text-black">Plumbing</span>
              </li>
              <li>
                <span className="text-black">Electrical & Solar Fitting</span>
              </li>
              <li>
                <span className="text-black">HVAC</span>
              </li>
              <li>
                <span className="text-black">Remodeling</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
