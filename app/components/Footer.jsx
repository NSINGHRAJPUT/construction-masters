import { FaBuilding, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FDF6E9] py-10 px-[2.5%] m-auto w-full">
      <div className="mx-auto w-full flex flex-wrap justify-between items-center gap-8">
        {/* Column 1 */}
        <div className="flex items-center">
          <FaBuilding className="text-[#EC9706] text-2xl mr-2" />
          <h2 className="text-lg font-bold">Construction Masters</h2>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                New Builds
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Renovations
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Conversation
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Fit Out
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-2">Information</h3>
          <ul>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#EC9706] hover:underline">
                Terms of Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-2">Address</h3>
          <p className="text-gray-700">
            123 Main Street, <br />
            Anytown, USA 12345 <br />
            456 Elm Street, <br />
            Othertown, USA 67890
          </p>
        </div>

        {/* Column 5 */}
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <FaFacebook className="text-[#EC9706] text-2xl" />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter className="text-[#EC9706] text-2xl" />
          </a>
          <a href="#">
            <FaLinkedin className="text-[#EC9706] text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
