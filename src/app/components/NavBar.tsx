import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="text-white mt-20 font-normal text-lg">
      <div className="px-6">
        <div className="flex justify-between items-center">
          {/* Left Section: Navigation Links */}
          <div className="flex flex-1 items-center space-x-4">
            <a
              href="#"
              className="flex items-center py-5 px-2  hover:text-gray-900"
            >
              Photo
            </a>
            <a
              href="#"
              className="flex items-center py-5 px-2  hover:text-gray-900"
            >
              Video
            </a>
            <a
              href="#"
              className="flex items-center py-5 px-2  hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="flex items-center py-5 px-2  hover:text-gray-900"
            >
              Contact
            </a>
          </div>

          {/* Middle Section: Logo */}
          <div className="flex-shrink-0 mx-auto">
            <Image
              src="https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/79675b61-221f-49bf-16e6-75c61ed15000/public"
              alt="Logo"
              width={56}
              height={56}
            />
          </div>

          {/* Right Section: SVG Icons */}
          <div className="flex flex-1 justify-end space-x-4">
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/zeke-ramirez-52b325279/">
              <Image
                src="https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/bd1abf89-0fc8-4780-2898-505640314900/public"
                alt="Icon 1"
                width={20}
                height={20}
              />
            </Link>
            {/* Youtube */}
            {/* <Image
              src="https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/296595d4-563f-4b14-280d-17581789e300/public"
              alt="Icon 2"
              width={20}
              height={20}
            /> */}
            {/* Instagram */}
            <Link href="https://www.instagram.com/zekenramirez/">
              <Image
                src="https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/6876c4ea-d7cf-4c27-1277-48fadc361500/public"
                alt="Icon 3"
                width={25}
                height={18}
              />
            </Link>
            {/* Email */}
            <Link href="mailto:zekeram@gmail.com">
              <Image
                src="https://imagedelivery.net/fqcRqpTzkWmIADGq5aUedQ/20e95e9c-582b-4f82-be84-c9f6bbc91d00/public"
                alt="Icon 4"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
