
import React from "react";
import Typewriter from "typewriter-effect";
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub 
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <div className="flex flex-row justify-between max-sm:justify-start max-sm:flex-col">
        <div className="px-10 max-sm:px-5  flex flex-row max-sm:flex-col   justify-between max-sm:justify-start max-sm:gap-[50px]  animate-[fadeIn_1s_forwards]  pt-[100px] max-sm:py-[20px]  max-md:mt-[5vh] max-md:mb-[5vh]">
          <div className="  w-[100%]  max-md:px-[5%] flex flex-col gap-4 text-left max-sm:w-[100%] ">
            <p className="text-white">Hi, my name is</p>
            <p className=" text-white text-[3.5rem] font-bold  animate-[leftToRight_1.5s_forwards] ">
              Himanshu {""}
              <span className=" text-blue-700    pt-2 overflow-x-hidden ">
                Singh Jani.
              </span>
            </p>
            <p className="text-[2.5rem] max-sm:text-2xl max-md:w-full flex flex-row  text-gray-400 animate-[leftToRight_3.5s_forwards] ">
              <Typewriter
                options={{
                  strings: ["Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              />
            </p>
            <Link to="/about"><div className='flex gap-4'>
                       <button  className='p-2 flex-auto border rounded-lg text-white font-bold text-[1.2rem] hover:text-black hover:bg-white hover:delay-100' >About Me</button>

                    </div></Link>
            <div className="flex flex-row gap-5 mt-5 max-md:mt-3">
              <AiFillLinkedin
                className="text-4xl text-blue-600 hover:text-white cursor-pointer "
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/himanshu-jani-589b92256/",
                    "_blank"
                  );
                }}
              />
             
              <AiFillGithub 
                className="text-4xl text-black hover:text-white cursor-pointer "
                onClick={() => {
                  window.open(
                    "https://github.com/Himanshu-singh-jani",
                    "_blank"
                  );
                }}
              />
              <AiOutlineWhatsApp
                className="text-4xl text-green-600 hover:text-white cursor-pointer "
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=9873267682",
                    "_blank"
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-[37%] max-sm:w-[100%] p-5">
          <img
            loading="lazy"
            alt="my-pic"
            src="/IMAGES/Himanshu.jpg"
            className=" p-2 mt-10 rounded-[50%] border-2 object-contain float-right max-sm:float-none max-sm:m-auto"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
