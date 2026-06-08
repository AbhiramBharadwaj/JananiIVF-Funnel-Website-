import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "I activated Google AI Pro in less than ten minutes using this guide. Saved me hundreds of rupees I almost paid to a reseller.",
    author: "Arjun M.",
    role: "Tech Enthusiast",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png"
  },
  {
    content:
      "Clear screenshots and step-by-step instructions. The ₹49 I spent here saved me at least ₹500 elsewhere.",
    author: "Neha P.",
    role: "Freelance Designer",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png"
  },
  {
    content:
      "I thought setting up Google AI Pro would be complicated, but this e-book made it ridiculously easy.",
    author: "Kiran S.",
    role: "Student & Developer",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png"
  },
  {
    content:
      "No more paying ₹999 to middlemen. This guide showed me exactly how to claim my own plan.",
    author: "Ritika L.",
    role: "Digital Marketer",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  }
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div
      className="bg-cover bg-center rounded-xl p-8 h-full flex flex-col justify-between text-white relative overflow-hidden shadow-lg hover:shadow-xl transition"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 text-center">
        <p className="text-lg sm:text-xl mb-6 font-medium leading-relaxed">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-lg sm:text-xl">{author}</h4>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40 z-0 rounded-xl"></div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white" id="testimonials" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Results That Speak for Themselves
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Real buyers share how the ₹49 guide helped them unlock Google AI Pro and avoid expensive reseller fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              content={t.content}
              author={t.author}
              role={t.role}
              gradient={t.gradient}
              backgroundImage={t.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
