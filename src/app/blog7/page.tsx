import Image from "next/image";
import img1 from "../images/Mohenjo-daro-2010.jpg"
import Foot from "../components/footer";


export default function blog7() {
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
          Mohenjo-daro
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        With an estimated population of at least 40,000 people, Mohenjo-daro prospered for several centuries, but by c. 1700 BCE had been abandoned, along with other large cities of the Indus Valley Civilization.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Mohenjo-daro has a planned layout with rectilinear buildings arranged on a grid plan.[17] Most were built of fired and mortared brick; some incorporated sun-dried mud-brick and wooden superstructures. The covered area of Mohenjo-daro is estimated at 300 hectares. The location of Mohenjo-daro was built in a relatively short period of time, with the water supply system and wells being some of the first planned constructions. [22] With the excavations done so far, over 700 wells are present at Mohenjo-daro, alongside drainage and bathing systems.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        Numerous objects found in excavation include seated and standing figures, copper and stone tools, carved seals, balance-scales and weights, gold and jasper jewellery, and children's toys.A seal discovered at the site bears the image of a seated, cross-legged and possibly ithyphallic figure surrounded by animals. 
        </p>
        <br></br><div><Foot/></div>
        <br /><br />
     
        
      </div>
    
    </div>
  );
}
