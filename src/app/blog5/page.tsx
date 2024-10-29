import Image from "next/image";
import img1 from "../images/Shah_jahan_mosque_-Thatta_3_(asad_aman).jpg";
import Foot from "../components/footer";


export default function blog5() {
  return (
    <div className="blogMainContainer flex flex-col md:flex-row md:justify-between p-4 md:p-10 animate-fadeIn">
      <div className="blogPicContainer md:w-1/2 md:order-1 flex justify-right items-right mb-7 md:mb-0">
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
          Shah Jahan Mosque, Thatta
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        It was built during the reign of Mughal emperor Shah Jahan, who bestowed it to the city as a token of gratitude, and is heavily influenced by Central Asian architecture - a reflection of Shah Jahan's campaigns near Samarkand shortly before the mosque was designed.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        The main entryway into the mosque complex is through a Persian-style charbagh, or quadrangle garden.

It has a four-iwan layout. The main prayer hall is set to the west of its central courtyard, which features iwans, or portals, in each of its four cardinal directions. The courtyard is rectangular in shape, and measures 169 feet by 97 feet. It is surrounded by aisled galleries, which are lined with 33 arches.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        The mosque is unusual for its lack of minarets. It has a total of 93 domes, the most of any structure in Pakistan.
        </p>
        <br></br><div><Foot/></div>
      </div>

      {/* Centered Div */}
   
    </div>
  );
}
