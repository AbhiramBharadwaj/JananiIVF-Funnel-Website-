import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Hero = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState<"form" | "verifying" | "success">("form");

  // Open Razorpay Checkout
  const openRazorpay = async () => {
    try {
      // Step 1: Create order on backend
      const res = await fetch(
        "https://digital-product-backend-87xy.onrender.com/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const order = await res.json();

      // Step 2: Launch Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Google AI Pro Guide",
        description: "Step-by-step e-book",
        handler: async function (response: any) {
          // Immediately show verifying UI
          setStep("verifying");

          // Step 3: Verify on backend
          await fetch(
            "https://digital-product-backend-87xy.onrender.com/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
              }),
            }
          );

          // Step 4: Show success UI
          setStep("success");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#f97316" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  // Handle form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openRazorpay();
  };

  return (
    <section className="relative bg-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
          Claim the offer before 30th September.
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
          How to Get Google AI Pro Plan for Just ₹49 for 1 Year. Step-by-Step Guide.
        </h1>

        <div className="text-base text-gray-700 mt-4 space-y-1">
          <p>✅ Instant access: download immediately after payment</p>
          <p>✅ Simple, beginner-friendly instructions</p>
          <p>✅ Avoid overpriced vendors charging ₹499–₹999</p>
          <p>❌ No Student ID Required</p>
          <p>
            ✅ Gemini Pro, Veo 3 Video, Gemini support Inside Google Apps, 2TB
            Storage.
          </p>
        </div>

        <p className="text-sm mt-3 text-gray-600">
          Trusted by 40+ dental practices. Book a live AI demo — no pressure,
          just proof.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            setShowPopup(true);
            setStep("form");
          }}
          className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition animate-pulse mx-auto"
        >
          Get the Guide for ₹49 <ArrowRight className="ml-2 w-5 h-5" />
        </button>

        <p className="text-xs text-gray-500 mt-2">
          Intro price ₹49 for a limited time.
        </p>

        <div className="mt-5 flex justify-center flex-wrap gap-6 text-gray-400 text-sm">
          <span>✅ Instant digital delivery</span>
          <span>⭐ Secure payment</span>
          <span>🔒 Trusted by hundreds of learners</span>
        </div>

        <p className="text-base text-gray-600 text-center mt-10 mb-4 font-medium">
          Get All the features of Google AI Pro Plan in Just 49
        </p>

        <div className="bg-gradient-to-br from-gray-100 via-white to-white p-4 rounded-xl shadow-lg max-w-3xl mx-auto">
          <img
            src="/newHero.png"
            alt="AI Call Demo Interface"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Step 1: Form */}
            {step === "form" && (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-center"
                />

                <PhoneInput
                  country={"in"}
                  onlyCountries={["in"]}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "8px",
                    textAlign: "left",
                  }}
                  countryCodeEditable={false}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-center"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full flex justify-center items-center"
                >
                  Continue to Payment{" "}
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </form>
            )}

            {/* Step 2: Verifying */}
            {step === "verifying" && (
              <div className="text-center text-blue-600 font-medium mt-4">
                ⏳ Verifying your payment… <br />
                Please wait a moment, don’t refresh.
              </div>
            )}

            {/* Step 3: Success */}
            {step === "success" && (
              <div className="text-center text-green-600 font-medium mt-4">
                ✅ Thanks {formData.name || "there"}! <br />
                A confirmation email has been sent to{" "}
                <strong>{formData.email}</strong>.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sticky CTA button */}
<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-[90%] sm:w-auto">
  <button
    onClick={() => {
      setShowPopup(true);
      setStep("form");
    }}
    className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg flex items-center justify-center"
  >
    <span className="line-through opacity-70 mr-2">₹999</span>
    <span className="text-lg">₹49 Get it Now</span>
    <ArrowRight className="ml-2 w-5 h-5" />
  </button>
</div>

    </section>
  );
};



export default Hero;
