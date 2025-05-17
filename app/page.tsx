import { FaJs, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa"; // Import programming language icons

import { SiMongodb , SiArduino, SiMysql} from "react-icons/si"; // Import MongoDB icon
import Image from "next/image"; // Use next/image for image optimization
import profilePic from "../public/AYS_5568.jpg"; // Import profile picture

export default function Page() {
  return (


    
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={profilePic}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">Ayyash Zamny</p>
          <p className="text-lg text-gray-400">Software Engineer</p>
          {/* Programming Languages Icons */}
          <div className="flex mt-2 space-x-4 text-gray-400">
            
            <div className="flex space-x-4 text-white">
            <FaJs size={24} className="hover:text-gray-600" title="JavaScript" />
            <FaReact size={24} className="hover:text-gray-600" title="React.js" />
            <FaNodeJs size={24} className="hover:text-gray-600" title="Node.js" />
            <SiMongodb size={24} className="hover:text-gray-600" title="MongoDB" />
            <SiArduino size={24} className="hover:text-gray-600" title="Arduino" />
            <SiMysql size={24} className="hover:text-gray-600" title="MySQL" />

            {/* C language fallback using styled 'C' text */}
            <span className="text-lg font-bold hover:text-gray-600" title="C Language">C</span>
          </div>
          </div>
        </div>
      </div>

     <p className="mb-4">
      I’m <strong>Ayyash Zamny</strong>, a Software Engineering student at the Sri Lanka Institute of Information Technology. I’ve built real-world solutions such as the <em>MediX Healthcare Management System</em>, a <em>Finance Management REST API</em>, an IoT-driven <em>Agricultural Monitoring System</em>, and mobile-first apps like <em>RideAwake</em>. These projects span domains from hospital operations to smart farming and have sharpened my ability to turn complex requirements into reliable software.
    </p>

    <p className="mb-4">
      Throughout my degree I’ve become fluent in modern full-stack tooling. On the frontend I specialise in <strong>React</strong>, while on the backend I’m comfortable with <strong>Node.js & Express</strong>. Data-layer work is a strong suit too—I design and optimise schemas in <strong>MySQL, MS SQL, and MongoDB</strong>. My codebases often follow the MERN pattern or a React + REST architecture.
    </p>

    <p className="mb-4">
      Beyond academics, I thrive on challenge: winning gold at the Kaohsiung International Invention & Design Expo and the National Muay Thai Championship taught me discipline and creative resilience. I’m driven to keep learning, adapting, and shipping software that makes a meaningful impact.
    </p>

    </section>
  );
}
