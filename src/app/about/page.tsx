import Image from "next/image";
import Foot from "../components/footer";

import img1 from "../images/Historical-Places-in-Pakistan.jpg";

export default function About() {
  return (
    
    <div className="blogMainContainer flex flex-col md:flex-row md:justify-between p-4 md:p-8 animate-fadeIn bg-emerald-50">
      
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
          About Pakistan 
          </h2>
        </center>
        
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Pakistan remains a country amusing for its traditional antiquity as well as variety. There remain numerous antique residences in Pakistan that are to be worthy to be knowledgeable by each person. 
        In reality, we are home to a virtuous amount of United Nations World Heritage sites. Pakistan’s traditional, ordinary as well as archaeological locations must be comprehended to be understood.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
        Pakistan remains an ethnically amusing nation-state recognized for its regular attractiveness, civilizations, nutrients, as well as ancient residences. From luxurious green grasslands to massive highland varieties to magnificent returns, Pakistan has it all together. 
        Pakistan remains heaven for the general public who love traveling ancient in addition to chronological residences. The nation-state was governed by diverse territories. Numerous well-known individuals voted for the fatherland throughout their missions equally well.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
        Unfilled leftovers of accurately antique evolutions. Three hundred-plus times from the past fortifications by some means practically completely together. Knowledgeably imprinted burial chamber decorated with a multi-colored of shades as well as a collection of geometry. 
            Mughal Era Mosques starting from the territories earlier that era had assertion wall painting which was portrayed by artistes that barrage beginning from what may be an additional domain. 
            In addition to this still stays merely on the other hand an insignificant photograph of the ceaseless quantity of chronological dwellings Pakistan has to propose.
        </p><br></br><br></br>
        <div><Foot/></div>
      </div>
     
    </div>
    
  );
  
}
