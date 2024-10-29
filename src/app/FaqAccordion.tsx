// components/FaqAccordion.tsx
import Image from 'next/image';

const faqs = [
  { question: "1. What is the significance of Mohenjo-Daro?", answer: "Mohenjo-Daro is one of the world's oldest cities, a center of the Indus Valley Civilization, showcasing advanced urban planning from over 4,500 years ago.", imgSrc: "/mohenjo-daro.jpg" },
  { question: "2. Where is the Lahore Fort located?", answer: "The Lahore Fort, a UNESCO World Heritage site, is located in the heart of Lahore and represents the grandeur of Mughal architecture.", imgSrc: "/lahore-fort.jpg" },
  { question: "3. What makes Rohtas Fort historically important?", answer: "Rohtas Fort, built by Sher Shah Suri, is a unique example of early Islamic military architecture in South Asia.", imgSrc: "/rohtas-fort.jpg" },
  { question: "4. Why is Taxila significant?", answer: "Taxila is one of the most important archaeological sites in Asia, known for its historical relevance in the spread of Buddhism and ancient educational centers.", imgSrc: "/taxila.jpg" },
  { question: "5. What is unique about Shalimar Gardens?", answer: "The Shalimar Gardens in Lahore are an example of Mughal garden design and were created to represent paradise on Earth.", imgSrc: "/shalimar-gardens.jpg" },
  { question: "6. Where is Badshahi Mosque located?", answer: "The Badshahi Mosque is located in Lahore, known for its magnificent Mughal architecture and large prayer hall.", imgSrc: "/badshahi-mosque.jpg" },
  { question: "7. What is the historical importance of Hiran Minar?", answer: "Hiran Minar in Sheikhupura is a Mughal-era hunting lodge built by Emperor Jahangir in memory of his beloved antelope.", imgSrc: "/hiran-minar.jpg" },
  { question: "8. Why is Makli Necropolis a UNESCO site?", answer: "Makli Necropolis is one of the largest funerary sites in the world, spanning centuries of history and a unique blend of Islamic and regional architectural styles.", imgSrc: "/makli-necropolis.jpg" },
  { question: "9. What does Ranikot Fort represent?", answer: "Ranikot Fort, also known as the Great Wall of Sindh, is one of the largest forts in the world, symbolizing ancient defense mechanisms.", imgSrc: "/ranikot-fort.jpg" },
  { question: "10. Where is Minar-e-Pakistan located?", answer: "Minar-e-Pakistan is located in Lahore, marking the spot where the Pakistan Resolution was passed in 1940.", imgSrc: "/minar-e-pakistan.jpg" },
];

const FaqAccordion = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-400 underline decoration-teal-700">FAQs on Historic Places of Pakistan</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <input type="checkbox" id={`faq-${index}`} className="hidden peer" />
          <label
            htmlFor={`faq-${index}`}
            className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-600"
          >
            {faq.question}
            <span className="ml-2 peer-checked:rotate-90 transform transition-transform duration-200">+</span>
          </label>
          <div className="overflow-hidden max-h-0 peer-checked:max-h-screen transition-all duration-300">
            <p className="text-blue-800 text-sm md:text-base p-4">{faq.answer}</p>
            <div className="mt-4">
              {/* <Image
                src={faq.imgSrc}
                alt={faq.question}
                width={500}
                height={300}
                className="rounded-md object-cover"
                priority
              /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
