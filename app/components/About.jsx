import Image from "next/image";
import about from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div id="about" className="bg-[#FDF6E9] py-20 px-8 md:px-20">
      <div className="mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-[100%] h-[100%] md:h-auto">
            <Image
              src={about}
              alt="About Us"
              layout="contain"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-[#EC9706] text-2xl mb-2">OUR STORY</h3>
          <h2 className="text-4xl font-bold mb-4">
            Building a Legacy of Excellence
          </h2>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
