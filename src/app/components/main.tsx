import Image from "next/image";
import Link from "next/link";
import image1 from "../images/Hiran_Minar-_monument_to_Mansraj.jpg";
import image2 from "../images/1280px-Tomb_of_Emperor_Jahangir.jpg";
import image3 from "../images/Derawar_Fort,_Bahawalpur_I.jpg";
import image4 from "../images/Shahi.jpg";
import image5 from "../images/Shah_jahan_mosque_-Thatta_3_(asad_aman).jpg";
import image6 from "../images/Takht-e-bahi.jpg";
import image7 from "../images/Mohenjo-daro-2010.jpg";
import image8 from "../images/Double-Headed_Eagle_Stupa_at_Sirkap_06 (1).jpg";
import image9 from "../images/Wazir_Khan_Mosque_by_Moiz.jpg";




export default function Main() {
    return (
        <div className="main">
            <br></br><div className="content">
            <h3 style={{ color: '#229799', fontSize: '30px', textAlign: 'center', fontWeight: 'bold', fontFamily: '"Times New Roman", Times, serif' }}>
                            Hareem's Blog Website<br />
                            <span style={{ color: '#0B2F9F', textDecoration: 'underline' ,fontSize:'60px'}}>
                                Historical Places of Pakistan
                            </span>
                        </h3><br></br>
                        <b><p className="bg-gray-200 border border-blue-800 rounded-lg p-5 mx-auto max-w-2xl text-green-800 text-lg leading-relaxed text-justify fontWeight: 'bold'">
                            Pakistan has a rich history and great cultural diversity. The historical places of Pakistan are some of the most popular tourist destinations in the country. In fact, both locals and tourists enjoy these historical places. They radiate the pride of the Pakistani people and represent culture. When you’re exhausted after the stressful weeks of exam preparation and exams, a nice vacation is exactly what you need. The beautiful and fascinating historical places in Pakistan are bound to make your break perfect.
                        </p></b>
            </div>

            <div id="blogSection" className="parentContainer">
                {[{ image: image1, title: "Hiran Minar", desc: "The complex in Sheikhupura was constructed in the early 17th century under the Mughal Emperor Jahangir. The large brick tower (minar) has a spiral staircase with 108 steps leading to the top.The pavilion is decorated by frescoes .", link: "/blog1" },
                  { image: image2, title: "Tomb of Jahangir", desc: "The Tomb of Jahangir is a striking testament to Mughal architecture and history.The site is famous for its interiors that are extensively embellished with frescoes and marble, and its exterior that is richly decorated with pietra dura. The gardens surrounding the tomb are vast, and laid out in the Persian Chahar Bagh, or Paradise garden.", link: "/blog2" },
                  { image: image3, title: "Derawar Fort", desc: "Derawar Fort is a fortress in Ahmadpur East Tehsil of Bahawalpur District.The fort is a massive and visually stunning square structure built of clay bricks. The walls have a length of 1500 meters and stand up to thirty meters high. There are forty circular bastions, ten on each side. ", link: "/blog3" },
                  { image: image4, title: "Lahore Fort", desc: "The Lahore Fort is a citadel in the city of Lahore.The fortress is located at the northern end of the Walled City of Lahore and spreads over an area greater than 20 hectares (49 acres). It contains 21 notable monuments, some of which date to the era of Emperor Akbar. ", link: "/blog4" },
                  { image: image5, title: "Shah Jahan Mosque Thatta", desc: "It is a 17th-century building that serves as the central mosque for the city of Thatta.The mosque is considered to have the most elaborate display of tile work in South Asia, and is also notable for its geometric brick work - a decorative element that is unusual for Mughal-period mosques.", link: "/blog5" },
                  { image: image6, title: "Takht-i-Bahi", desc: "Takht-i-Bahi is an Indo-Parthian archaeological site of an ancient Buddhist monastery.he site is considered among the most important relics of Buddhism in all of what was once Gandhara.According to a local belief, the site got its name from two wells on the hill or the springs nearby.A temple complex consisting of stupas ", link: "/blog6" },
                  { image: image7, title: "Mohenjo-daro", desc: "Mohenjo-daro was one of the largest cities of the Indus Valley Civilisation and was the first planned city in South Asia. Located on the banks of the Indus River, it flourished between 2,500 and 1,500 BCE.", link: "/blog7" },
                  { image: image8, title: "Taxila", desc: "Taxila, which was already inhabited in the Neolithic, was an important Buddhist centre of learning between the 5th century BCE and 2nd century CE. The archaeological site comprises the remains of four settlements.", link: "/blog8" },
                  { image: image9, title: "Wazir Khan Mosque", desc: "This mosque in the city of Lahore is constructed of brick and sandstone. It has five domes and four minarets and is richly decorated.Wazir Khan's mosque was part of a larger complex that included a row of shops traditionally reserved for calligraphers and bookbinders .", link: "/blog9" }]
                  .map(({ image, title, desc, link }, index) => (
                    <div key={index} className="childContainer bounce-in-left">
                        <div className="imageContainer fade-in-image">
                            <Image src={image} alt={title} width={400} height={400} style={{ borderRadius: '5%' }} />
                        </div>
                        <b><center><h2 className="title">{title}</h2></center></b>
                        <p className="description">{desc}</p>
                        <div>
                            <Link href={link}>
                                <b><center><button className="readMore">Read More</button></center></b>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div id="contactUs" className="min-h-screen pt-[100px] pd:pt-[100px] pb-6 flex flex-col items-center bg-teal-50">
            <h2 className="font-bold text-4xl text-center text-blue-900">Let’s Contact Us</h2>
            <p className="text-center pt-6 font-semibold">
                We would love to hear from you! Feel free to drop us a message.
            </p>
            <div className="flex mt-[10px] justify-center ">
                <section className="relative py-12 bg-blue-100 border-teal-500">
                    <div className="container mx-auto text-center px-4 border-teal-500">
                        <div className="relative w-[280px] md:w-[500px] mx-auto backdrop-filter backdrop-blue-lg p-6 md:p-8 rounded-lg shadow-lg space-y-6 border-teal-500">
                            <form className="space-y-3 md:space-y-3">
                                <div>
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                        className="w-full p-3 md:p-4 text-black rounded-lg placeholder-gray-500 border-2 border-transparent focus:border-blue-400 outline-none transition duration-300 bg-white bg-opacity-93"
                                    />
                                </div>
                                <div>
                                    <input
                                        placeholder="Your Email"
                                        type="email"
                                        className="w-full p-3 md:p-4 text-black rounded-lg placeholder-gray-500 border-2 border-transparent focus:border-blue-400 outline-none transition duration-300 bg-white bg-opacity-93"
                                    />
                                </div>
                                <div>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        className="w-full p-3 md:p-4 text-black rounded-lg placeholder-gray-500 border-2 border-transparent focus:border-blue-400 outline-none transition duration-300 bg-white bg-opacity-93"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full p-3 md:p-4 text-black rounded-lg placeholder-gray-500 border-2 border-transparent focus:border-blue-400 outline-none transition duration-300 bg-white bg-opacity-93 h-32 md:h-40 resize-none"
                                    />
                                </div>
                                <button
    type="submit"
    className="w-full py-3 md:py-4 text-teal-600 rounded-lg font-bold hover:shadow-lg transform hover:scale-110 hover:text-black transition duration-300 gradientone border border-teal-500"
>
    Send Message
</button>

                            </form>
                            <div className="mt-8">
                                <p className="text-md md:text-lg text-gray-800">
                                    Or connect with us on social media:
                                </p>
                                <div className="flex justify-center space-x-6 md:space-x-8 mt-4 md:mt-6">
                                    <a
                                        href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 font-bold hover:text-cyan-800 transition duration-300 text-xl md:text-2xl"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="https://github.com/Hareem-36"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400  font-bold hover:text-cyan-500 transition duration-300 text-xl md:text-2xl"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/" target="_blank" rel="noopener noreferrer">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-teal-600 text-white rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300 transform hover:scale-110">
                                            LinkedIn
                                        </button>
                                    </a>
                                    <a href="https://www.facebook.com/share/wuEzeX2f8oR9pjrS/" target="_blank" rel="noopener noreferrer">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-teal-600 text-white rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300 transform hover:scale-110">
                                            Facebook
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8">
                                <p className="text-md md:text-lg text-gray-800">
                                    Prefer direct email? Reach us at{" "}
                                    <a
                                        href="mailto:hareemjaweid2@gmail.com"
                                        className="text-cyan-700 hover:text-cyan-500 transition duration-300 font-bold"
                                    >
                                        hareemjaweid2@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </div>
        
    );
}
