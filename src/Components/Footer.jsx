
import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <footer class="bg-gray-900 text-gray-200 py-10 mt-4">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 class="text-xl font-semibold mb-4">About Me</h3>
              <p>
              Welcome to my web portfolio! I'm Himanshu Singh Jani, a Front end developer.
              </p>
            </div>
      
           
            <div>
              
              <ul>
                <li class="mb-2"> <Link to="/"><a href="#about" class="hover:text-white">Home</a></Link></li>
                <li class="mb-2"> <Link to="/about"><a href="#projects" class="hover:text-white">About</a></Link></li>
                <li class="mb-2"><Link to="/projects"><a href="#skills" class="hover:text-white">Projects</a></Link></li>
                <li class="mb-2"><Link to="/contact"><a href="#contact" class="hover:text-white">Contact</a></Link></li>
              </ul>
            </div>
      
           
            <div>
              <h3 class="text-xl font-semibold mb-4 ">Contact</h3>
              <p className="mt-2">Email: <a href="mailto:Himanshusinghjani@gmail.com" class="hover:text-white">Himanshusinghjani@gmail.com</a></p>
              <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/himanshu-jani-589b92256/" class="hover:text-white" target="_blank">Himanshu-Jani</a></p>
              <p className="mt-2">GitHub: <a href="https://github.com/Himanshu-singh-jani" class="hover:text-white" target="_blank">Himanshu-singh-jani</a></p>
            </div>
          </div>
      
         
          <div class="text-center mt-8 border-t border-gray-900 pt-6">
            <p>&copy; 2024 Himanshu Singh Jani | All Rights Reserved</p>
          </div>
        </div>
      </footer>
      
    )
}
export default Footer;