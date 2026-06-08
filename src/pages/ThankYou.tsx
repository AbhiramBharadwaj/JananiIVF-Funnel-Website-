import React, { useEffect } from "react";

const THANK_YOU_TRACK_FLAG = "__metaCompleteRegistrationTracked";

const ThankYou = () => {
  useEffect(() => {
    if (window.location.pathname !== "/thank-you") return;
    if ((window as any)[THANK_YOU_TRACK_FLAG]) return;

    (window as any)[THANK_YOU_TRACK_FLAG] = true;

    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "CompleteRegistration", {
        content_name: "Janani IVF Consultation",
        status: "Lead Submitted",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl backdrop-blur">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-3xl">
              ✅
            </div>
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Consultation request received
            </div>
            <h1 className="text-4xl font-black sm:text-5xl">Thank You</h1>
            <p className="mt-4 text-lg text-slate-100 sm:text-xl">
              Your details have been received. Our team will review your case and contact you shortly to guide you on the next step.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Keep your phone nearby for a callback or WhatsApp message",
                "Keep your reports or previous IVF details ready if available",
                "Be prepared to discuss your fertility history openly",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 text-sm text-slate-100">
              We will reach out by phone or WhatsApp after reviewing your lead details.
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1534]/70 via-[#0E1F50]/80 to-[#0B3B98]/70 px-6 py-6 text-center shadow-lg backdrop-blur">
              <div className="mx-auto max-w-2xl text-center">
                <div className="text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                  Janani IVF Team
                </div>
                <p className="mt-3 text-lg leading-7 text-slate-100">
                  Thank you for sharing your details. Your consultation request has been registered successfully.
                  Our team will review your fertility history, understand your concern, and help coordinate the
                  next conversation with Janani IVF in a clear and supportive way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
