import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";

type FormData = {
  name: string;
  id: string;
  phone: string;
  previousIvf: "" | "yes" | "no";
};

const trustBar = [
  "5.0 Google Rating",
  "457+ Reviews",
  "10,000+ IVF Cases",
  "Patients From 16+ Countries",
  "Oxford IVF Fellowship",
];

const realityPoints = [
  "IVF cycles that failed elsewhere with no clear explanation why",
  "Clinics that batch patients together and use the same protocol for everyone",
  "Doctors who are unavailable after your procedure, leaving you anxious and confused",
  "Being told donor eggs or donor sperm are the only option before every possibility is explored",
  "Large hospital chains where you feel like a file number, not a person",
  "Spending Rs. 1-2 lakhs on an IVF cycle with no personalized attention",
];

const systemHighlights = [
  {
    titlePrefix: "THIS ISN'T JUST ANOTHER",
    accent: "IVF CLINIC",
    titleSuffix: "THAT RUNS THE SAME PROTOCOL FOR EVERYONE.",
    body:
      "Most IVF clinics see 30-40 patients a day, batch them into the same protocol, and hand your case to a junior doctor after the first visit. You get a treatment designed for the average patient, not for you.\n\nAt Janani IVF, Dr. Rutvij Dalal personally handles every case from your first consultation to your pregnancy confirmation. Your protocol is built around your diagnosis, hormone levels, history, and body.",
    cardTitle: "Cookie-Cutter IVF",
    cardNote: "Same cycle plan. Same rushed attention.",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Cookie-cutter IVF care",
  },
  {
    titlePrefix: "THIS IS NOT A",
    accent: "ONE-SIZE-FITS-ALL",
    titleSuffix: "IVF PROTOCOL.",
    body:
      "We engineer a personalized treatment plan using advanced embryology, evidence-based stimulation protocols, and a specialist team, so every cycle gives you the highest possible chance of success, not just a standard attempt.\n\nThat is why patients who failed elsewhere often come to Janani IVF for a more careful second opinion and a more individualized path forward.",
    cardTitle: "Personalized IVF Care",
    cardNote: "Specialist-led planning. Evidence-based treatment.",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Personalized IVF protocol",
  },
];

const differentiationCards = [
  {
    title: "India's Rarest Credentials",
    body:
      "Dr. Rutvij Dalal holds an Oxford IVF Fellowship, FNB in Reproductive Medicine from Lilavati Mumbai, MRCOG(I), and a DGO Gold Medal. He has spent 16+ years focused exclusively on infertility care.",
  },
  {
    title: "No Patient Batching. Ever.",
    body:
      "Your protocol is designed specifically for you. Every stimulation, retrieval, and transfer is individually planned and personally supervised instead of being run as a bulk cycle.",
  },
  {
    title: "Azoospermia Specialists",
    body:
      "We specialize in helping couples where the male partner has zero sperm count. Using TESA and PESA techniques, we try to recover sperm directly and use your own genetic material wherever medically possible.",
  },
];

const readinessChecks = [
  "You have been trying to conceive for more than 1 year without success.",
  "You have been told IVF is your best option but have not started yet.",
  "You have had 1 or more failed IVF cycles elsewhere and want a second opinion.",
  "You or your partner have low sperm count, poor ovarian reserve, PCOS, or unexplained infertility.",
  "You want a doctor who will personally answer your questions throughout the journey.",
  "You want IVF treatment at a more affordable cost than large hospital chains.",
];

const faqs = [
  {
    q: "How is Janani IVF different from Nova IVF or Indira IVF?",
    a: "Janani IVF is more doctor-led and personalized. Dr. Rutvij Dalal supervises each case personally, protocols are individualized, and patients are not treated as part of a bulk batch cycle.",
  },
  {
    q: "What is your IVF success rate and how is it calculated?",
    a: "Janani IVF reports an IVF success rate of around 70 percent, depending on age, diagnosis, embryo quality, and prior history. Success always varies by case, which is why individualized planning matters.",
  },
  {
    q: "Do you treat patients with azoospermia or failed IVF cycles?",
    a: "Yes. Janani IVF has a strong focus on azoospermia, male infertility, poor ovarian reserve, and recurrent IVF failure cases that often need more detailed evaluation than standard clinics provide.",
  },
  {
    q: "What happens if my IVF cycle does not succeed?",
    a: "Your case is reviewed carefully to understand what happened and what should change next. The goal is not to repeat the same protocol blindly, but to make medically justified improvements for the next step.",
  },
  {
    q: "How many IVF cycles will I need?",
    a: "There is no universal number. Some couples conceive in the first cycle, while others need a more staged plan. The right answer depends on your diagnosis, age, egg reserve, sperm quality, and medical history.",
  },
  {
    q: "What is the cost of an IVF cycle at Janani IVF?",
    a: "IVF at Janani typically starts around Rs. 1,00,000 to Rs. 1,20,000 for a base cycle, which is often lower than many Delhi NCR hospital chains. Final cost depends on the treatment path recommended for your case.",
  },
  {
    q: "Can I get a second opinion consultation if I have already done IVF elsewhere?",
    a: "Yes. Many couples come to Janani IVF after failed cycles elsewhere to understand what may have been missed and whether a more individualized strategy is possible.",
  },
];

const awards = [
  "FOGSI CORION Award",
  "Best IVF Centre of Delhi",
  "Best Centre for Azoospermia Treatment",
];

const Index = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(-1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    id: "",
    phone: "",
    previousIvf: "",
  });

  const sheetsWebhookUrl =
    "https://script.google.com/macros/s/AKfycbwOiA3f3FAlMbl66C_y7EoFLgU7B4Ogb8c4E2t5mbF0QdtPlOgf4AVZLEJrEJr85X2s/exec";
  const webhookUrl = "/api/lead";

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  const resetForm = () => {
    setFormData({
      name: "",
      id: "",
      phone: "",
      previousIvf: "",
    });
    setErrors(null);
  };

  const openForm = () => {
    resetForm();
    setIsFormOpen(true);
  };

  const handleNext = async () => {
    if (isSubmitting) {
      return;
    }

    setErrors(null);

    if (!formData.name || !formData.id || !formData.phone || !formData.previousIvf) {
      setErrors("Please complete all required fields.");
      return;
    }

    if (!/^\+?\d{10,}$/.test(formData.phone.replace(/\s+/g, ""))) {
      setErrors("Phone number should include at least 10 digits.");
      return;
    }

    setIsSubmitting(true);

    try {
      const previousIvfLabel = formData.previousIvf === "yes" ? "Yes" : "No";
      const leadId = `lead_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
      const receivedTime = new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const leadPayload = {
        lead_id: leadId,
        received_time: receivedTime,
        full_name: formData.name.trim(),
        email: formData.id.trim(),
        phone: formData.phone.trim(),
        status: "New Lead",
        qna_simple: `previous_ivf_cycle: ${previousIvfLabel}`,
        whatsapp_message:
          `*NEW LEAD ENQUIRY - JANANI IVF*\n\n` +
          `Status: New Lead\n` +
          `Received Time: ${receivedTime}\n` +
          `Name: ${formData.name.trim()}\n` +
          `Phone: ${formData.phone.trim()}\n` +
          `Email: ${formData.id.trim()}\n` +
          `Previous IVF Cycle: ${previousIvfLabel}\n`,
      };

      const leadResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadPayload),
      });

      if (!leadResponse.ok) {
        const leadErrorBody = await leadResponse.text().catch(() => "");
        throw new Error(`Lead webhook failed (${leadResponse.status}) ${leadErrorBody}`);
      }

      const payload = JSON.stringify({
        fullName: formData.name.trim(),
        id: formData.id.trim(),
        phone: formData.phone.trim(),
        previousIvf: formData.previousIvf === "yes",
        source: "janani-ivf-patient-homepage",
      });

      await fetch(sheetsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: payload,
      }).catch((error) => {
        console.error("[LeadCapture] Sheets webhook failed", error);
      });

      setIsFormOpen(false);
      navigate("/book");
    } catch (error) {
      console.error("[LeadCapture] Submission failed", error);
      setErrors("Lead submission failed. Please try again in a few seconds.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCtaNote = (textClass: string, accentClass: string) => (
    <div className={`mt-3 text-center text-xs ${textClass}`}>
      <div className={`font-semibold ${accentClass}`}>Personalized IVF care. Transparent guidance. Specialist-led treatment.</div>
      <div>Book your consultation with Dr. Rutvij Dalal and understand the right treatment path for your case.</div>
    </div>
  );

  return (
    <div className="editorial-page bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[#ecebe7] text-[#0b0b0c]">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="editorial-kicker mx-auto w-fit">
                Janani IVF Success System
              </div>

              <h1
                className="mx-auto max-w-5xl text-4xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">After Years of Trying,</span>
                <span className="block">
                  You Deserve a Doctor Who <span className="editorial-marker">Takes Your Case Personally.</span>
                </span>
              </h1>

              <p
                className="mx-auto max-w-4xl text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">
                  At Janini IVF, Dr. Rutvij Dalal (Oxford IVF Fellowship | DGO Gold Medalist) has helped 10,000+ couples achieve pregnancy, including those told it was impossible elsewhere.
                </span>
                <span className="mt-2 block font-black text-[#19191b]">
                  No batched protocols. No junior doctors. Just one specialist, fully focused on your case.
                </span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-[#d5d2ca] bg-[#f3f2ed] px-4 py-2 text-sm font-semibold text-[#222] shadow-sm">
                70% IVF success rate. One of the highest reported in Delhi NCR.
              </div>

              <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#d5d2ca] bg-white/80 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                {trustBar.map((item) => (
                  <span key={item} className="rounded-full bg-[#f7f6f2] px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl text-xl font-black focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Book Your Free Consultation with Dr. Dalal
                </button>

                {renderCtaNote("text-slate-600", "text-slate-800")}
                <p className="max-w-3xl text-sm font-medium text-slate-600">
                  Clinic located in Paschim Vihar, West Delhi — Serving patients from across India and 16 countries
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecebe7] pb-8">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-[#d5d2ca] bg-[#f7f6f2] p-8 shadow-sm sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="editorial-kicker w-fit">Meet Your Specialist</div>
                  <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                    Dr. Rutvij Dalal
                  </h2>
                  <p className="mt-2 text-lg font-semibold text-slate-700">
                    MBBS, DGO Gold Medalist, DNB, FNB Reproductive Medicine, MRCOG(I), Fellowship in IVF - Oxford, UK
                  </p>
                  <p className="mt-5 text-lg leading-8 text-slate-700">
                    16+ years focused exclusively on infertility. No general gynecology. No obstetrics. Only fertility care designed for couples who need clarity, precision, and a better chance at success.
                  </p>
                  <blockquote className="mt-6 border-l-4 border-[#111] pl-4 text-lg italic leading-8 text-slate-700">
                    "Every couple deserves a treatment plan built around their own biology, history, and hope. IVF should never feel rushed or generic."
                  </blockquote>
                </div>
                <div className="rounded-3xl border border-[#d5d2ca] bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Recognition
                  </div>
                  <div className="mt-4 space-y-3">
                    {awards.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-[#f7f6f2] px-4 py-4 text-base font-semibold text-slate-800"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-[#d5d2ca] bg-[#f7f6f2] px-6 py-10 text-center shadow-sm sm:px-10">
              <div className="editorial-kicker mx-auto mb-5 flex w-fit items-center gap-3">
                Reality Check
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Every Couple Struggling With Infertility Is Carrying Hope They're Afraid To Lose
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#f2d302]" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                You've been trying for months, maybe years. You've done the tests, followed the advice, and still no result. You've saved carefully for this treatment, and you're trusting a doctor with one of the most important decisions of your life.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                That trust deserves to be honored with individualized care, clear explanations, and a plan that is actually built for your case.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">What couples often struggle with before reaching Janani IVF:</p>
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
                <button onClick={openForm} className="cta-button cta-shine">
                  Book Your Free Consultation
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">The Janani IVF Success System</h3>
            </div>

            <div className="mt-8 space-y-12">
              {systemHighlights.map((item, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={item.titlePrefix} className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className={isReversed ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-black leading-tight text-slate-900">
                        {item.titlePrefix} <span className="editorial-marker">{item.accent}</span> {item.titleSuffix}
                      </h3>
                      <p className="mt-4 whitespace-pre-line text-base leading-7 text-slate-700">{item.body}</p>
                    </div>
                    <div className={isReversed ? "md:order-1" : ""}>
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#d5d2ca] bg-gradient-to-br ${item.cardClass} shadow-sm`}>
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Janani IVF</div>
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
                THIS IS A COMPLETE, <span className="editorial-marker">PERSONALIZED IVF CARE SYSTEM.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                The decision to pursue IVF is never easy. Couples spend months researching, second-guessing, and hoping. At Janani IVF, the process is built to reduce uncertainty through expert medical care, advanced embryology, and compassionate support at every step.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-[#d5d2ca] bg-white px-6 py-8 text-center shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Transparent Pricing
              </div>
              <h3 className="mt-3 text-2xl font-black text-slate-900">
                IVF At Janani Starts At Rs. 1,00,000
              </h3>
              <p className="mt-3 text-lg text-slate-700">
                Significantly lower than many Delhi NCR hospitals, with transparent guidance and no hidden cost positioning in the funnel.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button onClick={openForm} className="cta-button cta-shine">
                Speak To Dr. Rutvij Dalal
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ecebe7] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5d2ca] bg-[#f3f2ed] px-4 py-2 text-sm font-semibold text-[#b42318] shadow-sm">
                Why Couples Choose Janani IVF
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Here Is What Makes Janani IVF Genuinely Different
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {differentiationCards.map((item, idx) => (
                <div key={item.title} className="rounded-2xl border border-[#d5d2ca] bg-[#f7f6f2] p-[1px] shadow-sm">
                  <div className="rounded-2xl bg-[#f7f6f2] p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Difference</span>
                      <span className="text-[#c23b22]">0{idx + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-4 whitespace-pre-line text-slate-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[#d5d2ca] bg-[#f7f6f2] p-8 shadow-sm">
              <div className="text-center">
                <div className="editorial-kicker mx-auto w-fit">Patient Story</div>
                <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
                  "Tried For 4 Years. Failed Twice Elsewhere. Came To Janani IVF. Now A Mother."
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  This is the kind of journey the page should make visible: not generic promises, but what changes when a difficult fertility case is finally reviewed with time, precision, and the right specialist support.
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button onClick={openForm} className="cta-button cta-shine">
                Book Your Free Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              BOOK YOUR CONSULTATION <span className="editorial-marker">IF...</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              This page is designed for couples who want serious, personalized fertility treatment.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {readinessChecks.map((item, idx) => (
                <div key={item} className="rounded-2xl border border-[#d5d2ca] bg-[#f7f6f2] p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-base font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-lg font-semibold leading-snug text-slate-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button onClick={openForm} className="cta-button cta-shine w-full max-w-2xl rounded-xl">
                Book Your Free Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section id="faq" className="bg-[#ecebe7] py-16 text-[#111]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-xl border border-[#d5d2ca] bg-[#f7f6f2]">
                    <button
                      onClick={() => setActiveFAQ(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-[#111]"
                    >
                      <span className="text-lg font-semibold">{item.q}</span>
                      <span className="text-2xl">{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen && <div className="px-6 pb-5 text-base leading-7 text-slate-700">{item.a}</div>}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button onClick={openForm} className="cta-button cta-shine">
                Speak To Dr. Rutvij Dalal
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-slate-800")}
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16 text-[#111]">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              You're One Step Away From The Treatment That Could Change Everything
            </h2>
            <p className="mt-4 text-xl text-slate-700">
              Most couples do not fail at IVF because of biology alone. They fail because they were given a generic protocol at a clinic that did not have the time to look closely at their individual case. At Janani IVF, every couple gets Dr. Dalal's full attention, an individualized plan, and a team that stays available throughout the journey.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md text-xl font-semibold hover:shadow-xl"
              >
                Book Your Free Consultation - Speak To Dr. Rutvij Dalal
              </button>
              {renderCtaNote("text-slate-600", "text-slate-800")}
            </div>
          </div>
        </section>
      </main>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <div className="text-lg font-semibold text-slate-900">Book Your Consultation</div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-200"
              >
                X
              </button>
            </div>

            <div className="space-y-4 px-6 py-6">
              {errors && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errors}</div>}

              <div className="grid gap-4">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Full Name*</span>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Email ID*</span>
                  <input
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Phone Number (WhatsApp)*</span>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91"
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                  <p className="text-xs text-slate-500">We'll send appointment confirmation via WhatsApp.</p>
                </label>

                <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">
                    Have you already tried IVF before?*
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ].map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setFormData({ ...formData, previousIvf: option.value as "yes" | "no" })}
                        className={`rounded-lg border px-3 py-3 text-left text-sm font-semibold transition ${
                          formData.previousIvf === option.value ? "border-[#0066FF] bg-blue-50 text-[#0B1534]" : "border-slate-200 bg-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-slate-100 px-6 py-5">
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="cta-button cta-shine w-full max-w-sm bg-[#0066FF] text-white hover:bg-[#0a58d8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit and Proceed"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
