import Image from "next/image";
import img1 from "../images/Wazir_Khan_Mosque_by_Moiz.jpg"
import Foot from "../components/footer";


export default function blog9() {
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
          Wazir Khan Mosque
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The mosque is located in the Walled City of Lahore along the southern side of Lahore's Shahi Guzargah, or "Royal Road," which was the traditional route traversed by Mughal nobles on their way to royal residences at the Lahore Fort.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Wazir Khan's mosque was part of a larger complex that included a row of shops traditionally reserved for calligraphers and bookbinders, and the town square in front of the mosque's main entrance. The mosque also rented space to other types of merchants in the mosque's northern and eastern façades, and ran the nearby Shahi Hammam.[14][15] Revenues from these sources were meant to serve as a waqf, or endowment, for the mosque's maintenance.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        Walls of the prayer hall's interior are also decorated with calligraphy in both Arabic and Persian.[24] Each wall is divided further, and contain unique mosaic designs.[26] The acoustic properties of the dome allow for the imam's sermon to be projected across the mosque's courtyard.The courtyard is flanked on four sides by 32 khanas, or small study cloisters for religious scholars. The mosque's four 107 foot tall minarets are located in each corner of the courtyard.
        </p>
        <br></br><div><Foot/></div>
        <br /><br />
     
        
      </div>
    
    </div>
  );
}
