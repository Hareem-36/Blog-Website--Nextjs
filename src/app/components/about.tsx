import Image from "next/image";
import img1 from "../images/Historical-Places-in-Pakistan.jpg";

export default function About() {
  return (
    <div className="blogMainContainer flex flex-col md:flex-row md:justify-between p-4 md:p-8 animate-fadeIn">
      <div className="blogPicContainer md:w-1/2 md:order-2 flex justify-center items-center mb-4 md:mb-0">
        <div className="blogPic w-full md:w-4/5 transition-transform duration-500 hover:scale-105">
          <Image
            src={img1}
            alt="Hiran Minar"
            className="rounded-lg border-4 border-gray-500 animate-fadeIn"
          />
        </div>
      </div>
      <div className="blogContentContainer md:w-1/2 flex flex-col justify-center md:order-1">
        <center>
          <h2 className="blogMainHeading text-4xl mb-2 text-blue-800 animate-fadeInUp font-bold underline transition-colors duration-300 hover:text-blue-500">
            Hiran Minar
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
          Located in Sheikhupura, Hiran Minar is an early Mughal-era complex
          built in the 17th century. It is also known as the “Deer Minar.”
          Emperor Jahangir built the complex in memory of his pet antelope,
          Mansraj.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
          Hiran Minar is located in Sheikhupura, a city northwest of Lahore.
          Sheikhupura Fort, which dates back to the early 17th century, is
          another famous historical site nearby. Both sites can be reached from
          Lahore via the M2 highway.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
          At the heart of the complex lies a large rectangular Pool (229m by
          273m) with ramps for animals and an elaborate water system that filled
          the tank. The Pavilion, built during Shah Jahan’s reign, is octagonal,
          two-storied, and crowned with a stone chhatri. It served recreational
          purposes and is similar to Delhi’s Sher Mandal.
        </p>
        <p className="footertop mt-4 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
          A Causeway, supported by 21 arched pillars, connects the pavilion and
          the minaret, with a platform at its center for scenic views. This
          structure was built as a royal residence for Jahangir.
        </p>
      </div>
    </div>
  );
}
