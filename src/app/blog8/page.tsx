import Image from "next/image";
import img1 from "../images/Double-Headed_Eagle_Stupa_at_Sirkap_06 (1).jpg"
import Foot from "../components/footer";


export default function blog8() {
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
       Taxila
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Old Taxila was for a time the capital city of ancient Gandhāra, situated on the eastern shore of the Indus River—the pivotal junction of the Indian subcontinent and Central Asia; it was possibly founded around 1000 BCE
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Taxila was considered to be one of the earliest (or the earliest) universities in the world. The school consisted of several monasteries without large dormitories or lecture halls where the religious instruction was provided on an individualistic basis.The Ramayana describes Takshashila as a magnificent city famed for its wealth which was founded by Bharata, the younger brother of Rama. Bharata, who also founded nearby Pushkalavati, installed his two sons, Taksha and Pushkala, as the rulers of the two cities.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        The lost city of Taxila, however, was not identified until later, in 1863-64.The ancient ruins of Taxila include four cities from different historical periods across three sites. Hathial, the earliest, dates back to the late 2nd millennium BCE. Bhir Mound, nearby, dates from the 6th century BCE. Sirkap, built by Greco-Bactrian kings after Alexander's invasion, dates to the 2nd century BCE. The most recent site, Sirsukh, was founded by the Kushan Empire.
        </p>
        <br></br><div><Foot/></div>
        <br /><br />
     
        
      </div>
    
    </div>
  );
}
