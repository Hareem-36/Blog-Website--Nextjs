import Image from "next/image";
import Foot from "../components/footer";
import img1 from "../images/1280px-Tomb_of_Emperor_Jahangir.jpg";


export default function Blog2() {
  return (
    <div className="blogMainContainer flex flex-col md:flex-row md:justify-between p-4 md:p-10 animate-fadeIn">
      <div className="blogPicContainer md:w-1/2 md:order-1 flex justify-right items-right mb-4 md:mb-0">
        <div className="blogPic w-full md:w-4/5 transition-transform duration-500 hover:scale-105">
          <Image
            src={img1}
            alt="Hiran Minar"
            className="rounded-lg border-4 border-gray-500 animate-fadeIn"
         
          />
        </div>
      </div>

      <div className="blogContentContainer md:w-1/2 flex flex-col justify-center md:order-4">
        <center>
          <h2 className="blogMainHeading text-4xl mb-2 text-blue-800 animate-fadeInUp font-bold underline transition-colors duration-300 hover:text-blue-500">
          Tomb of Jahangir
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The Tomb of Jahangir is a striking testament to Mughal architecture and history. Commissioned by Emperor Jahangir’s son, Shah Jahan, this mausoleum commemorates the fourth Mughal ruler’s legacy. Completed in 1637, the tomb is renowned for its intricate craftsmanship and Persian-inspired design. Constructed with red sandstone and adorned with marble inlays, it stands as a majestic example of Mughal artistry. 
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The mausoleum’s four minarets and a grand entrance gate add to its grandeur. Inside, Jahangir’s white marble sarcophagus is an elegant focal point. The surrounding Charbagh garden, divided into four quadrants, reflects the traditional Islamic paradise garden style. The Tomb of Jahangir is not merely a historical structure, it’s a cultural treasure that provides a glimpse into the opulence and architectural brilliance of the Mughal era.
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
