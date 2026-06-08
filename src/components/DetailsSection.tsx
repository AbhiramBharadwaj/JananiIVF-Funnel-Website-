import React from "react";

const DetailsSection = () => {
  return (
    <section id="details" className="w-full bg-white py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          What Our Clients Say
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: " Meera N.",
              company: "SmileCraft Dental",
              text: "We stopped missing calls completely. Our clients actually compliment the voice agent!",
              photo: "/people/meera.jpg"
            },
            {
              name: " Ajay S.",
              company: "AlignIQ Clinics",
              text: "The AI does follow-ups better than our staff ever could. It’s like hiring a superstar receptionist.",
              photo: "/people/ajay.jpg"
            },
            {
              name: " Tanya R.",
              company: "BrightOral Group",
              text: "Setup was fast, support was great, and clients immediately noticed the difference.",
              photo: "/people/tanya.jpg"
            }
          ].map((t, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition text-center flex flex-col items-center"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover mb-3"
              />
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500 mb-3">{t.company}</p>
              <p className="text-sm text-gray-700 italic mb-3 max-w-xs">"{t.text}"</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.91 12.5 1 8.91l6.09-.89L10 3l2.91 5.02L19 8.91l-4.91 3.59 1.788 5.59z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>    
  );
};

export default DetailsSection;
