import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Database Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 70,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Gaurav Rai</h1>
          <h2 className="text-3xl ">
              I am  <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          I am software engineer specializing in web development. I’m passionate about creating innovative and efficient web solutions that enhance user experiences.

          Here, you’ll find a selection of my work that highlights my skills in web development, from responsive design to complex functionalities. My goal is to build impactful web applications and contribute to exciting projects.

          Feel free to explore my projects and get in touch if you’d like to collaborate or discuss new opportunities. I look forward to connecting with you!

          Thank you for visiting!
          </p>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="https://www.facebook.com/gaurav.rai.98096721">
              <i class="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" href="https://www.instagram.com/roypryanshu/?igsh=MXB2b2xhNHVvcWNkaA%3D%3D" >
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="https://www.github.com/gaurav6129">
              {/* <i class="fa-brands text-4xl  fa-youtube"></i> */}
              <i class="fa-brands fa-github"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" href="https://www.linkedin.com/in/gaurav-rai-48231a220/">
              <i class="fa-brands text-4xl  fa-linkedin-in" ></i>
              
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSebamS3bKIWeJhaZNpML-_HU1OqhePzOjPER_swK8A9z3AqtQ/viewform?usp=sf_link"
            // href="/contact"
          >
            Contact Me
          </a>
          
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
