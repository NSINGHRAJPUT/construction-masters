import Image from "next/image";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";

const Blog = () => {
  return (
    <div id="blog" className="px-[2.5%] m-auto my-[10vh]">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-[#EC9706]">Blogs</h2>
        <h1 className="text-4xl font-bold mb-2">
          Insightful blogs about the construction industry.
        </h1>
      </div>
      <div className="flex flex-wrap flex-row items-center justify-evenly gap-8">
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[95%] sm:min-w-[300px] max-w-[360px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={b1}
              alt="Consultation Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <div className="text-sm mb-2">24 October 2023</div>
            <h3 className="text-lg text-[#EC9706]  font-bold mb-2">
              Consultation Services
            </h3>
            <p className=" line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vitae doloremque, ex quae laborum non eaque
              explicabo ea hic numquam iure ipsa id dolorum earum est delectus
              aliquam. Perspiciatis, corrupti.
            </p>
            <button className="bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[95%] sm:min-w-[300px] max-w-[360px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={b2}
              alt="General Construction"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <div className="text-sm mb-2">24 October 2023</div>
            <h3 className="text-lg text-[#EC9706]  font-bold mb-2">
              General Construction
            </h3>
            <p className=" line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vitae doloremque, ex quae laborum non eaque
              explicabo ea hic numquam iure ipsa id dolorum earum est delectus
              aliquam. Perspiciatis, corrupti.
            </p>
            <button className="bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md p-0 min-w-[95%] sm:min-w-[300px] max-w-[360px] flex flex-col justify-between">
          <div className="relative w-full h-40">
            <Image
              src={b3}
              alt="Maintenance Services"
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="p-6">
            <div className="text-sm mb-2">24 October 2023</div>
            <h3 className="text-lg text-[#EC9706]  font-bold mb-2">
              Maintenance Services
            </h3>
            <p className=" line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit vitae doloremque, ex quae laborum non eaque
              explicabo ea hic numquam iure ipsa id dolorum earum est delectus
              aliquam. Perspiciatis, corrupti.
            </p>
            <button className="bg-[#EC9706] text-white py-2 px-4 rounded-md cursor-pointer mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
