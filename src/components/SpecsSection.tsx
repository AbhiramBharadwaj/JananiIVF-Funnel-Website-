import React from "react";
import { Calendar, Phone, MessageSquareText, BarChart3 } from "lucide-react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How You’ll Unlock Google AI Pro for Just ₹49
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Your e-book walks you through the simple steps to claim Google AI Pro yourself—
          no middlemen, no overpriced “retailer” fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Phone className="w-10 h-10 text-orange-500 mb-3" />,
              title: "Purchase & Download",
              desc: "Make the ₹49 payment and instantly receive the PDF guide."
            },
            {
              icon: <Calendar className="w-10 h-10 text-orange-500 mb-3" />,
              title: "Follow the Steps",
              desc: "Clear, screenshot-backed instructions show you exactly where to click."
            },
            {
              icon: <MessageSquareText className="w-10 h-10 text-orange-500 mb-3" />,
              title: "Activate Your Plan",
              desc: "Use the guide to enable Google AI Pro on your own account."
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-orange-500 mb-3" />,
              title: "Enjoy the Savings",
              desc: "Skip paying ₹499–₹999 to resellers and keep the extra cash in your pocket."
            }
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition bg-orange-50"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
