import Image from "next/image";
import Foot from "../components/footer";
import img1 from "../images/Derawar_Fort,_Bahawalpur_I.jpg";


export default function blog3() {
  return (
    <div className="blogMainContainer flex flex-col md:flex-row md:justify-between p-4 md:p-10 animate-fadeIn">
      <div className="blogPicContainer md:w-1/2 md:order-2 flex justify-right items-right mb-4 md:mb-0">
        <div className="blogPic w-full md:w-4/5 transition-transform duration-500 hover:scale-105">
          <Image
            src={img1}
            alt="Hiran Minar"
            className="rounded-lg border-4 border-gray-500 animate-fadeIn"
          />
        </div>
      </div><br></br>
      <div className="blogContentContainer md:w-1/2 flex flex-col justify-center md:order-3">
        <center>
          <h2 className="blogMainHeading text-4xl mb-2 text-blue-800 animate-fadeInUp font-bold underline transition-colors duration-300 hover:text-blue-500">
          Derawar Fort
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Derawar Fort, a majestic desert fortress located in the Cholistan Desert of Pakistan, stands as a testament to the rich historical legacy of the region. Built-in the 9th century by Rai Jajja Bhatti, the fort was later captured by the Nawabs of Bahawalpur in the 18th century. The massive structure, with its towering walls and 40 bastions, showcases stunning Islamic architecture. The fort’s strategic location on the ancient trade route, connecting Central Asia with the Indian subcontinent, further emphasizes its historical significance. 
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Derawar and the Desert Forts of Cholistan was submitted by the Pakistan Government in 2016 to be considered as a World Heritage Site. The structures are reminiscent of ancient stops during trading routes in a desert largely lacking water. Derawar especially allowed access to water, while providing defense and shelter. The site is important due to its role in identifying political and social factors relating to Afghanistan, Pakistan, and India trading routes.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        At the centre of the mausoleum is an octagonal chamber lined with carved marble in which the remains of the Mughal Emperor rest in a crypt below a cenotaph. The interior of the tomb features a white-marble cenotaph inlaid with pietra dura in vegetal patterns, as well as the 99 Names of Allah, a common theme in Islamic mysticism.
        </p>
        <br></br><div><Foot/></div>
        
        <br /><br />
        
        

      </div>
    
    </div>
  );
}
