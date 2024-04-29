"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import heroimg from "../../assets/heroimg.png";

const Hero = () => {
  const [constructionCount, setConstructionCount] = useState(0);
  const [engineersCount, setEngineersCount] = useState(0);
  const [suppliersCount, setSuppliersCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (constructionCount < 18) {
        setConstructionCount((prevCount) => prevCount + 1);
      }
      if (engineersCount < 10) {
        setEngineersCount((prevCount) => prevCount + 1);
      }
      if (suppliersCount < 5) {
        setSuppliersCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [constructionCount, engineersCount, suppliersCount]); // Add state variables as dependencies

  return (
    <div id="home" className="bg-[#FDF6E9] relative py-20 px-[2.5%] text-left">
      <Image
        src={heroimg}
        className="absolute right-0 -z-0 bottom-0 w-[50%] h-[100%]"
      ></Image>
      <div className="relative mx-auto z-10">
        <div className="text-left mb-8">
          <h2 className="text-lg text-[#EC9706]">We are Master Builders</h2>
          <h1 className="text-4xl font-bold mb-2">
            Design and Build Contractor
          </h1>
          <p className="text-sm max-w-[360px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="text-left mb-[15%]">
          <button className="bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer">
            Get a Quote
          </button>
        </div>
        <div className="text-center mb-8">
          <div className="flex justify-start">
            <div className="mr-8">
              <p className="text-[#EC9706] text-lg font-bold mb-1">
                Construction
              </p>
              <p className="text-2xl">{constructionCount}+</p>
            </div>
            <div className="mr-8">
              <p className="text-[#EC9706] text-lg font-bold mb-1">
                Fundi Engineers
              </p>
              <p className="text-2xl">{engineersCount}+</p>
            </div>
            <div>
              <p className="text-[#EC9706] text-lg font-bold mb-1">
                Regular Suppliers
              </p>
              <p className="text-2xl">{suppliersCount}+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
