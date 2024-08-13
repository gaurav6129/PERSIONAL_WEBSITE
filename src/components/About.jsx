import { useState } from "react";
import bannerImage from "../assets/bi2.png";
// import { ShowMore } from '@re-dev/react-truncate'
const About = () => {
  
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Database Developer",
    desc1: `I’ve done my Bachelors in Technology with Information Technology stream from Babu Banarasi Das Northern India Institute of Technology. Also, I did my 12th & 10th from UP Board in the year 2019 and 2017 respectively. 
`,
    desc2: ` I am here for the role of Backend Development. Coming to my skills I know  C, C++, Java, Spring boot, JPA, RestAPI, MySQL and Hibernate. I had 1 internships as well in this Full Stack Web Development domain where along with core technical things .I also learned organizational ethics and discipline. Moreover, I also did 2 successful individual projects Data science Technology and Web Development in my college tenure.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
      

    },
    
    
  });
  
  return (
    // <div>
    <div id="About Me">
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt=""
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
