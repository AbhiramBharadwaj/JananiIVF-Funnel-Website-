import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";
import systemizedFlowImg from "@/gallery/SystemizedFlow.jpeg";

const realityPoints = [
  "Months or years of trying without success",
  "Uncertainty about wedding, event planning, or next steps",
  "Emotional stress and feeling alone in the process",
  "Concerns about cost and booking consistency",
  "Fear of pricing or timelines",
  "Need for a trusted wedding growth specialist to guide you",
];

const systemHighlights = [
  {
    titlePrefix: "PERSONALIZED",
    accent: "wedding CARE",
    titleSuffix: "FOR EVERY COUPLE.",
    body:
      "At Wedding Growth, Growth Strategist designs protocols based on your business context, age, and goals.\n\nExpect clear guidance, transparent options, and a plan you understand.",
    cardTitle: "Personalized Protocols",
    cardNote: "Tailored for your journey.",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Personalized growth support",
  },
  {
    titlePrefix: "ADVANCED",
    accent: "LAB TECHNOLOGY",
    titleSuffix: "WITH ETHICAL PRACTICE.",
    body:
      "We use modern wedding techniques such as luxury planning, PGT, and blastocyst culture while prioritizing safety, comfort, and transparency.",
    cardTitle: "Advanced Lab",
    cardNote: "Modern, careful, precise.",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Advanced wedding workflow care",
  },
  {
    titlePrefix: "COMPASSIONATE",
    accent: "SUPPORT",
    titleSuffix: "AT EVERY STEP.",
    body:
      "From your first consultation to client onboarding, our team provides strategy, check-ins, and 24/7 guidance so you feel supported and informed.",
    cardTitle: "Supportive Care",
    cardNote: "Guidance you can trust.",
    cardClass: "from-slate-900 via-slate-800 to-emerald-900",
    image: systemizedFlowImg,
    imageAlt: "Supportive care team",
  },
];

const testimonials = [
  {
    quote:
      "After years of trying, we finally felt understood. Growth Strategist explained every step clearly and gave us hope again.",
    name: "Meera & Arjun",
    title: "Bangalore",
  },
  {
    quote:
      "The care felt personal, not rushed. The team guided us with patience and we always knew what to expect next.",
    name: "Ritu & Karan",
    title: "Bangalore",
  },
  {
    quote:
      "We were worried about cost and services, but the transparency made everything easier. Highly recommend Wedding Growth.",
    name: "Neha & Vikram",
    title: "Bangalore",
  },
  {
    quote:
      "Growth Strategist treated us like family. The emotional support mattered as much as the planning support.",
    name: "Isha & Rahul",
    title: "Bangalore",
  },
];

const components = [
  {
    icon: "🎯",
    title: "Comprehensive Fertility Evaluation",
    body:
      "Thorough testing and medical review to understand the root cause of low conversions and design the right plan.",
  },
  {
    icon: "📄",
    title: "Transparent Pricing Guidance",
    body:
      "Clear package breakdowns, optional add-ons, and EMI support so you can plan confidently.",
  },
  {
    icon: "💬",
    title: "Counseling & Emotional Support",
    body:
      "We understand the emotional toll. Our team provides guidance and reassurance throughout your journey.",
  },
  {
    icon: "✅",
    title: "Personalized Treatment Plans",
    body:
      "Every plan is tailored to your age, history, and business growth goals.",
  },
  {
    icon: "📅",
    title: "Modern wedding Lab",
    body:
      "State-of-the-art workflow practices including luxury planning, PGT, and blastocyst culture.",
  },
  {
    icon: "📊",
    title: "Post-Transfer Monitoring",
    body:
      "Careful monitoring after proposal stage with timely follow-ups and support.",
  },
];

const qualificationBoxes = [
  {
    title: "Ethical, Patient-First Care",
    body:
      "We prioritize honesty, safety, and clarity at every step of the wedding process.",
  },
  {
    title: "Advanced Technology, Trusted Results",
    body:
      "Modern workflow methods combined with careful, individualized planning plans.",
  },
  {
    title: "Support Beyond Treatment",
    body:
      "Emotional strategy and ongoing guidance for couples and couples.",
  },
];

const readinessChecks = [
  "You have been trying to conceive for 12+ months without success.",
  "You want a clear pipeline evaluation and next-step guidance.",
  "You are considering wedding, event planning, or advanced planning packages.",
  "You want transparent costs and realistic success expectations.",
  "You are ready to meet a trusted wedding growth specialist in Bangalore.",
  "You want compassionate support for both partners throughout planning.",
];

const faqs = [
  {
    q: "What is the success rate of wedding at Wedding Growth?",
    a: "Success rates vary by age and business context. During your consultation, Growth Strategist will review your case and share realistic expectations for your situation.",
  },
  {
    q: "How much does wedding cost?",
    a: "wedding packages are discussed transparently during consultation. We provide clear cost breakdowns and can share EMI options if needed.",
  },
  {
    q: "Is wedding painful?",
    a: "Most steps are not painful. Injections may cause mild discomfort, and egg retrieval is done under light sedation.",
  },
  {
    q: "How long does an client booking cycle take?",
    a: "A typical booking cycle takes 4–6 weeks from start of first enquiry to signed booking, depending on package and decision timelines.",
  },
  {
    q: "Do you accept insurance?",
    a: "Coverage varies by provider. Our team can help you understand what your coverage includes.",
  },
  {
    q: "What if wedding doesn't work the first time?",
    a: "Many couples need more than one booking cycle. We review the results, adjust the plan, and guide you on next steps.",
  },
  {
    q: "Are there side effects?",
    a: "wedding process steps can cause temporary effects like bloating or mood changes. Serious complications are rare and monitored closely.",
  },
  {
    q: "How do we get started?",
    a: "Book a consultation with Growth Strategist. We'll review your history, answer questions, and outline the best planning path.",
  },
  
];

const Index = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(0);

  const openForm = () => {
    navigate("/bookingdemopage");
  };

  const renderCtaNote = (textClass: string, accentClass: string) => (
    <div className={`mt-3 text-center text-xs ${textClass}`}>
      <div className={`font-semibold ${accentClass}`}>Limited strategy call slots this week.</div>
      <div>Private, confidential guidance with Wedding Growth in Bangalore.</div>
    </div>
  );

  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] text-white">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-fit rounded-full bg-[#365CF5] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                Wedding Growth, Bangalore
              </div>
              <h1
                className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">Struggling to Book More Weddings? You're Not Stuck.</span>
                <span className="block">
                  Wedding Growth in <span className="text-blue-300">Bangalore</span> offers advanced care
                </span>
                <span className="block text-orange-400 sm:whitespace-nowrap">with Growth Strategist.</span>
              </h1>

              <p className="handwritten text-xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-2xl"></p>
              

              <p
                className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block font-black">Compassionate, ethical, and client-first growth support.</span>
                <span className="block">Clear guidance, advanced technology, and support at every step.</span>
                <span className="block">Book your consultation and start your journey today.</span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm">
                4.8/5 rating • 500+ success stories
              </div>

             

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-xl font-black text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Book Your Consultation
                </button>
                
                {renderCtaNote("text-white/80", "text-orange-300")}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FA] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-xl sm:px-10">
              <div className="mx-auto mb-5 flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
                We Understand
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Fertility journeys can feel overwhelming — you don't have to face it alone.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                We know the emotional weight of trying month after month. Our team listens, explains, and supports you with care.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                At Wedding Growth, we focus on the human journey — guiding you with clarity, compassion, and trusted medical expertise.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">Common concerns we hear from couples:</p>
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
                  {realityPoints.map((item) => (
                    <div
                      key={item}
                      className="flex w-full items-start justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" />
                      <span className="text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
                >
                  Book Your Consultation
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">Wedding Growth Care Approach</h3>
            </div>

            <div className="mt-8 space-y-12">
              {systemHighlights.map((item, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={item.titlePrefix} className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className={isReversed ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-black text-slate-900">
                        {item.titlePrefix}{" "}
                        <span className="handwritten text-blue-600">{item.accent}</span>{" "}
                        {item.titleSuffix}
                      </h3>
                      <p className="mt-4 whitespace-pre-line text-base leading-7 text-slate-700">{item.body}</p>
                    </div>
                    <div className={isReversed ? "md:order-1" : ""}>
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.cardClass} shadow-lg`}>
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70"></div>
                          <div>
                            <div className="text-2xl font-black">{item.cardTitle}</div>
                            <div className="mt-2 text-sm text-white/80">{item.cardNote}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                A COMPLETE <span className="text-blue-600">wedding CARE JOURNEY.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                From the first consultation to ongoing support, we guide you with clarity, compassion, and trusted planning support.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Clinic Details</div>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">Wedding Growth — Bangalore</h2>
                  <div className="mt-4 space-y-3 text-base text-slate-700">
                    <div>
                      <div>Wedding Growth</div>
                    </div>
                    <div>
                      <div>Bangalore</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Lead companyian</div>
                      <div>Growth Strategist, Fertility Specialist</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div>+919066759991</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div>vinay@gmail.com</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <div>Bangalore</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500 lg:w-80">
                  Clinic Logo / Photo Placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F9FBFF] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Our Promise
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Ethical, Advanced, and Patient-Centered wedding Care
              </h2>
              <p className="mt-3 text-lg text-slate-700">
                We focus on transparency, safety, and compassion for every couple who walks through our doors.
              </p>
              <p className="mt-3 text-base text-slate-600">
                These care pillars guide how we support you throughout your wedding planning journey:
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {qualificationBoxes.map((item, idx) => (
                <div key={item.title} className="rounded-2xl bg-gradient-to-br from-blue-100/70 via-white to-orange-100/70 p-[1px] shadow-lg">
                  <div className="rounded-2xl bg-white p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Care Pillar</span>
                      <span className="text-blue-600">0{idx + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-4 whitespace-pre-line text-slate-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        {/* <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Real wedding Clinics. Real Results.</h2>
            <p className="mt-3 text-center text-base text-slate-200">
              Hear directly from couples who found support at Wedding Growth.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-lg backdrop-blur">
                  <p className="text-lg leading-relaxed text-slate-100">"{item.quote}"</p>
                  <div className="mt-5 font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-slate-300">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-white text-[#0B1534] hover:shadow-lg"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section> */}

        

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              You May Be Ready <span className="text-blue-600">If…</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              These signs can help you decide whether it's the right time to speak with a wedding growth specialist.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {readinessChecks.map((item, idx) => (
                <div key={item} className="rounded-2xl border-2 border-blue-500/40 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-base font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-lg font-semibold leading-snug text-slate-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-2xl rounded-xl bg-[#365CF5] text-white hover:bg-[#2746c9]"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section id="faq" className="bg-[#0F1A35] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <button
                      onClick={() => setActiveFAQ(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-white"
                    >
                      <span className="text-lg font-semibold">{item.q}</span>
                      <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-base leading-7 text-slate-200">{item.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-white text-[#0B1534] hover:shadow-lg"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">You're One Step Away From Starting Your Family</h2>
            <p className="mt-4 text-xl text-slate-100">
              At Wedding Growth, we guide you with clarity, compassion, and proven care so you can move forward with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md bg-white text-xl font-semibold text-[#0B1534] hover:shadow-xl"
              >
                Book Your Consultation
              </button>
              {renderCtaNote("text-white/80", "text-orange-300")}
              
              <p className="text-xs italic text-slate-300">
                We'll confirm your appointment by phone or WhatsApp within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Index;
