import Image from "next/image";
import img1 from "../images/Shahi.jpg";
import Foot from "../components/footer";


export default function blog4() {
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
       Lahore Fort
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The Lahore Fort is notable for having been almost entirely rebuilt in the 17th century,[3] when the Mughal Empire was at the height of its splendor and opulence.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The fort is divided into two sections: first, the administrative section, which is well connected with main entrances, and includes gardens and Diwan-e-Khas for royal audiences. 
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        The second, a private and concealed residential section is divided into courts in the north and accessible through elephant gate. It also contains Sheesh Mahal, spacious bedrooms and small gardens. The exterior walls are decorated with blue Persian Kashi tiles. The original entrance faces the Maryam Zamani Mosque and the larger Alamgiri gate opens towards Hazuri Bagh through the majestic Badshahi mosque Influence of Hindu architecture is seen in the zoomorphic corbels.
        </p>
        <br></br><div><Foot/></div>
        
     
        
      </div>
    
    </div>
  );
}
