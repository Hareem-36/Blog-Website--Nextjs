import Image from "next/image";
import img1 from "../images/Takht-e-bahi.jpg";
import Foot from "../components/footer";


export default function blog6() {
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
            Takht-i-Bahi
          </h2>
        </center>
        <h3 className="text-xl mt-2 mb-2 text-gray-700 animate-fadeInUp font-bold transition-colors duration-300 hover:text-lime-400">
          Introduction
        </h3>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
          Takht-i-Bahi (Pashto/Urdu: تختِ باہی, lit. 'throne of the water spring'), is an Indo-Parthian archaeological site of an ancient Buddhist monastery in Mardan, Khyber-Pakhtunkhwa, Pakistan. The site is considered among the most important relics of Buddhism in all of what was once Gandhara.
        </p>
        <p className="mt-1 mb-2 text-gray-800 animate-fadeInUp font-bold transition-colors duration-300 hover:text-teal-500">
          There are four main areas of the Takht Bahi complex: The Stupa Court, a cluster of stupas located in a central courtyard. The monastic chambers consist of individual cells arranged around a courtyard, assembly halls, and a dining area. A temple complex consisting of stupas similar to the Stupa Court but of later construction. The Tantric monastic complex, which consists of small, dark cells with low openings, which may have been used for certain forms of Tantric meditation. Additional structures on the site may have served as residences or meeting halls or for secular purposes. All of the buildings on the site are constructed from local stone and are mortared with lime and mud.
        </p>
        <p className="footertop mt-4 text-gray-800 font-bold transition-colors duration-300 hover:text-teal-500">
          The first modern historical reference to these ruins was made in 1836 by a French officer who referred to the Buddhist remains in a village named Mazdoorabad. Explorations and excavations on the site began in 1864. A significant number of objects can be found in the British Museum. The site underwent a major restoration in the 1920s.
        </p>
        <br></br><div><Foot/></div>
      </div>

      {/* Centered Div */}
  
    </div>
  );
}
