import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Logo from "../../assets/epics.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-gray-100 dark:bg-gray-950">
        <section className="max-w-[1200px] mx-auto py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={Logo} alt="Logo" className="max-w-[50px]" />
                EPIC DESIGNERS
              </h1>
              <p className="text-sm leading-relaxed">
                Let us be the bridge between your dreams and reality. Contact us to turn your aspirations into achievements.
                <br />
                If you have a project you would like to discuss, get in touch with us.
              </p>
            </div>
            <div className="py-8 px-4 w-auto"> {/* Added md:w-2/3 to set width for the second column */}
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Contact</h1>
              <div className="flex items-center gap-3">
                <MdEmail />
                <p>epicdesignersandbuilders@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaLocationArrow />
                <p>Kottayam, Kerala</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaMobileAlt />
                <p>+91 9400630066</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaMobileAlt />
                <p>+91 7561031211</p>
              </div>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Social Handles</h1>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/epic_designers_and_builders?igsh=N3EwM3B1aTQycnVo">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Footer;
