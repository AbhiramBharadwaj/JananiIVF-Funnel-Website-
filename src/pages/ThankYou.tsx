import React, { useEffect } from "react";
import abhiramImg from "@/gallery/Abhiram.jpeg";

const THANK_YOU_TRACK_FLAG = "__metaCompleteRegistrationTracked";

const ThankYou = () => {
  useEffect(() => {
    if (window.location.pathname !== "/thank-you") return;
    if ((window as any)[THANK_YOU_TRACK_FLAG]) return;

    (window as any)[THANK_YOU_TRACK_FLAG] = true;

    if (typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "CompleteRegistration", {
        content_name: "Wedding Strategy Call",
        status: "Booked",
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
              Appointment confirmed
            </div>
            <h1 className="text-4xl font-black sm:text-5xl">Appointment Confirmed</h1>
            <p className="mt-4 text-lg text-slate-100 sm:text-xl">
              Your call is confirmed. We’ll review your details and come prepared with a plan tailored to your company.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Check your email/WhatsApp for confirmation",
                "Bring your current lead numbers & challenges",
                "Be ready to discuss growth goals",
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
              You’ll receive the meeting details by email and WhatsApp shortly.
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-[#0B1534]/70 via-[#0E1F50]/80 to-[#0B3B98]/70 px-6 py-6 text-center shadow-lg backdrop-blur">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-48 w-48 overflow-hidden rounded-3xl border border-white/30 shadow-md sm:h-56 sm:w-56">
                  <img
                    src={abhiramImg}
                    alt="Abhiram"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <div className="text-base font-semibold text-white">Abhiram</div>
                  <div className="mt-1 text-base font-semibold uppercase tracking-[0.2em] text-white/70">
                    wedding growth strategist
                  </div>
                  <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-100">
                    Hi, I'm Abhiram. I've worked closely with wedding planning companies to turn scattered enquiries into consistent,
                    high-intent enquiry bookings. I focus on client-first messaging, ethical follow-ups, and
                    data-backed funnel systems so companies can build trust while growing predictably. Expect a warm,
                    practical conversation centered on your company's goals and what will genuinely help your clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
