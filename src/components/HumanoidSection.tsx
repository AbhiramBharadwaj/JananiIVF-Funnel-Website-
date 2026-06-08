import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HumanNoidSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://hook.us2.make.com/6r9af26wnvxkd88sytrh4m79sqsojedi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: `+${formData.phone}`,
        email: formData.email,
        timestamp: new Date().toISOString(),
      }),
    });
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="bg-white  px-4 text-center" id="results">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          See How Others Claimed Google AI Pro for Just ₹49
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          These aren’t empty claims. They’re genuine stories of people who grabbed the guide and activated Google AI Pro themselves—no middlemen, no hefty fees.
        </p>

        {/* Logo Row */}
        <div className="flex justify-center items-center gap-4 flex-wrap mb-12">
          <img src="/1.png" alt="SmileWorks Dental" className="h-12 grayscale hover:grayscale-0 transition" />
          <img src="/3.png" alt="BrightOral Group" className="h-12 grayscale hover:grayscale-0 transition" />
          <img src="/2.png" alt="AlignIQ Clinics" className="h-12 grayscale hover:grayscale-0 transition" />
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-100 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-white text-orange-600 font-bold px-4 py-1 rounded-full text-lg shadow-sm">
                ₹450+
              </span>
            </div>
            <p className="text-gray-700 text-base font-medium text-center">saved compared to typical reseller pricing</p>
            <p className="text-xs text-gray-500 mt-1 italic text-center">— from early buyers</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-100 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-white text-orange-600 font-bold px-4 py-1 rounded-full text-lg shadow-sm">
                2,000+
              </span>
            </div>
            <p className="text-gray-700 text-base font-medium text-center">downloads of the guide</p>
            <p className="text-xs text-gray-500 mt-1 italic text-center">— community data</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-100 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-white text-orange-600 font-bold px-4 py-1 rounded-full text-lg shadow-sm">
                4.9★
              </span>
            </div>
            <p className="text-gray-700 text-base font-medium text-center">average rating from learners</p>
            <p className="text-xs text-gray-500 mt-1 italic text-center">— survey of purchasers</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button
            onClick={() => setShowPopup(true)}
            className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Get the Guide for ₹49 →
          </button>
          <p className="text-sm text-gray-500 mt-3 italic">
            No hidden charges. Instant digital delivery after payment
          </p>
        </div>
      </div>

      {/* Lead Capture Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Let’s Get You a Free Demo Call</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-center"
                  />

                  <PhoneInput
                    country={"us"}
                    preferredCountries={["us", "in", "gb"]}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputStyle={{
                      width: "100%",
                      height: "48px",
                      borderRadius: "8px",
                      paddingLeft: "48px",
                      textAlign: "left",
                    }}
                    containerStyle={{ width: "100%", position: "relative" }}
                    buttonStyle={{
                      backgroundColor: "white",
                      border: "none",
                      position: "absolute",
                      top: 6,
                      left: 10,
                    }}
                    enableSearch
                    disableDropdown={false}
                    countryCodeEditable={false}
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-center"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full flex justify-center items-center"
                  >
                    Let’s Go – Book My Spot! <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center text-green-600 font-medium mt-4">
                ✅ Thanks {formData.name || "there"}! Our AI assistant will reach out in <strong>5 seconds</strong> with a real-time demo.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HumanNoidSection;
