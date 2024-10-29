// pages/contact.tsx

export default function Contact() {
    return (
        <div id="contactUs" className="min-h-screen pt-[150px] pd:pt-[100px] pb-10 flex flex-col items-center bg-gray-50">
            <h2 className="font-bold text-4xl text-center text-blue-900">Let’s Contact Us</h2>
            <p className="text-center pt-6 font-semibold">
                We would love to hear from you! Feel free to drop us a message.
            </p>
            <div className="flex mt-[10px] justify-center">
                <section className="relative py-12 bg-transparent">
                    <div className="container mx-auto text-center px-4">
                        <div className="relative w-[280px] md:w-[500px] mx-auto backdrop-filter backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg space-y-6">
                            <form className="space-y-4 md:space-y-6">
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
                                    className="w-full py-3 md:py-4 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-110 hover:text-black transition duration-300 gradientone"
                                >
                                    Send Message
                                </button>
                            </form>
                            <div className="mt-8">
                                <p className="text-md md:text-lg text-gray-300">
                                    Or connect with us on social media:
                                </p>
                                <div className="flex justify-center space-x-6 md:space-x-8 mt-4 md:mt-6">
                                    <a
                                        href="https://www.linkedin.com/in/ishkmaheen24/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-700 hover:text-cyan-800 transition duration-300 text-xl md:text-2xl"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="https://github.com/ishk-maheen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-500 transition duration-300 text-xl md:text-2xl"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a href="https://www.linkedin.com/in/ishkmaheen24/" target="_blank" rel="noopener noreferrer">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-sky-300 text-black rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300 transform hover:scale-110">
                                            LinkedIn
                                        </button>
                                    </a>
                                    <a href="https://github.com/ishk-maheen" target="_blank" rel="noopener noreferrer">
                                        <button className="px-5 py-2 md:px-6 md:py-3 text-sm md:text-base bg-sky-300 text-black rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300 transform hover:scale-110">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8">
                                <p className="text-md md:text-lg text-gray-300">
                                    Prefer direct email? Reach us at{" "}
                                    <a
                                        href="mailto:maheenrashidsheikh786@gmail.com"
                                        className="text-cyan-400 hover:text-cyan-500 transition duration-300"
                                    >
                                        maheenrashidsheikh786@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
