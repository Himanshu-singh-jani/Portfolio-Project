import { SKILLS } from "./Constants";


const About=()=> {
  return (
    <div className="w-full  flex justify-center">
      <div className="w-[60%] max-md:w-[100%] text-left flex flex-col gap-10 pl-2">
        <p className="text-[2.8rem] font-bold text-white">
          <span className="text-[2.5rem] font-bold  border-b-8 border-b-blue-700">
            About
          </span>{" "}
          Me
        </p>
        <p className="text-white">
          Welcome to my web portfolio! I'm Himanshu Singh Jani, a Front end
          developer. Over the past 2 years, I have dedicated myself to Web
          development.
          <br />
          <br />
          As a front end developer, my tech stack is primarily based on
          JavaScript, which allows me to seamlessly work on the front end
          applications. While my strength lies in front-end development, I am
          continuously enhance my skills and learn many morden framworks.
        </p>
        <div className="text-3xl font-bold border-b-8 border-b-blue-700  w-min text-white">Skills</div>
        <div className="text-white">
        {SKILLS.map((skills)=>{
          return <div> {skills}</div>
        })}
      </div>
      </div>
      
   </div>
  );
} 
export default About;
