import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";

type FormData = {
  name: string;
  id: string;
  phone: string;
  owner: "" | "yes" | "no";
};

const realityPoints = [
  "Empty consultation slots despite spending on Instagram ads",
  "Enquiries that only ask for price lists, never commit",
  "Couples who ghost after one WhatsApp message",
  "No-shows on scheduled calls wasting your team's time",
  "Peak season chaos, off-season silence — no consistency",
  "Agencies that send bulk leads with zero qualification",
];

const systemHighlights = [
  {
    titlePrefix: "THIS ISN'T JUST ANOTHER",
    accent: "We'll Get You Leads",
    titleSuffix: "AGENCY SERVICE.",
    body:
      "Most agencies blast your DMs with random Instagram leads and disappear. The Wedding Growth System does something different.\n\nWe build a structured couple journey that brings budget-confirmed, date-set, emotionally-ready couples straight to your sales consultation.",
    cardTitle: "Random Leads",
    cardNote: "Inbox chaos + price shoppers",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Random leads cluttering inbox",
  },
  {
    titlePrefix: "THIS IS NOT A",
    accent: "Post Reels And Pray",
    titleSuffix: "PROGRAM.",
    body:
      "We don't rely on viral posts, boosted stories, or spray-and-pray targeting.\n\nWe engineer a complete inquiry-to-booking pipeline using data, emotional psychology, and trust-building touchpoints — so every lead moves closer to signing with you, step by step.",
    cardTitle: "Waiting For Results",
    cardNote: "Low intent. Slow follow-up.",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Waiting for results",
  },
];

const testimonials = [
  {
    quote:
      "We struggled for months with random enquiries asking only about cost. After switching to Wedding Growth System, our calendar finally filled with serious, emotionally ready couples. In the first 30 days alone, we booked 42 high-quality consultations.",
    name: " Nivedita Rao",
    title: "wedding Specialist, Bangalore",
  },
  {
    quote:
      "The biggest shift was trust. Couples arrived with clarity, confidence, and far fewer doubts. The WhatsApp nurturing system alone improved our show-up rates from 38% to 81%. This is the most reliable appointment engine we've used.",
    name: " Kaustubh Patel",
    title: "Wedding Business Owner, Ahmedabad",
  },
  {
    quote:
      "We had tried agencies before, but nothing felt structured. Wedding Growth System changed everything. The funnel built more trust than any ad we've run. We recorded 3x more booking enquiries in our second month.",
    name: " Meera Vinay",
    title: "Senior Embryologist, Mumbai",
  },
  {
    quote:
      "The quality of consultations went up drastically. These weren't window shoppers — they were couples actively seeking wedding planning package. Our team finally had predictable appointments every week.",
    name: " Anil Verma",
    title: "Wedding Consultant, Pune",
  },
];

const components = [
  {
    icon: "🎯",
    title: "Wedding-Niche Audience Targeting",
    body:
      "We create service-specific campaigns for:\n• full wedding planning\n• pre-wedding events\n• destination weddings\n• decor & coordination\n• luxury wedding planning\n\nHyper-targeted to couples in your city who are actively searching for wedding planning services right now.",
  },
  {
    icon: "📄",
    title: "Trust-Building Funnel",
    body:
      "Done-for-you landing pages tailored for buyer psychology and trust-building. No generic templates.\n\nDesigned specifically to:\n• Address concerns and objections\n• Build credibility\n• Pre-qualify based on budget and readiness\n• Guide couples toward booking (not just clicking)",
  },
  {
    icon: "💬",
    title: "Lead Follow-Up by Trained Agents",
    body:
      "• Instant replies (within 5 minutes)\n• 40-60% faster conversions\n• Message + Call + WhatsApp automation\n• No lead left behind\n\nYour team focuses on consultations, we handle the follow-up.",
  },
  {
    icon: "✅",
    title: "Pre-Qualification System",
    body:
      "We filter every lead based on:\n• Budget range (right fit for your packages?)\n• Service need (right fit for your team?)\n• City/location (within your service area?)\n• Event timeline (qualified for your calendar?)\n• Readiness to book (immediate, 3 months, or 6 months)\n\nOnly serious, qualified couples reach your calendar.",
  },
  {
    icon: "📅",
    title: "Appointment Calendar Integration",
    body:
      "High-intent leads get booked directly into your calendar.\n\nAutomated reminders sent via:\n• WhatsApp (24 hours before)\n• SMS (1 hour before)\n• Email confirmation\n\nReduces no-shows from 50% to 15-20%.",
  },
  {
    icon: "📊",
    title: "Dedicated Growth Manager",
    body:
      "• Weekly optimization & scaling\n• Call quality audits\n• Performance reporting\n• Strategy adjustments\n\nYou get a dedicated partner, not just a vendor.",
  },
];

const qualificationBoxes = [
  {
    title: "Deep Business Alignment",
    body:
      "We review whether your planning style, service quality, and client communication aligns with our trust-building inquiry pathway.\n\nSince wedding decisions are deeply emotional and family-driven, we only partner with planners committed to clarity and honest expectations.",
  },
  {
    title: "Growth Positioning Opportunities",
    body:
      "We examine your current visibility, strengths, and what sets you apart in your city's market.\n\nIf your positioning is unclear or undifferentiated, bookings will suffer — you don't need a fancy portfolio, just a clear package and a strong promise.",
  },
  {
    title: "Quality vs. Quantity Focus",
    body:
      "We prefer planners who want consistent, high-value bookings — not bulk enquiry dumps or budget-only shoppers.\n\nIf your focus is long-term growth and real event contracts, our system will be an excellent fit.",
  },
];

const readinessChecks = [
  "You want consistent wedding enquiries every month.",
  "You want high-intent couples instead of random budget shoppers.",
  "You want a predictable booking system instead of depending only on referrals.",
  "You want to increase consultation-to-booking conversions.",
  "You want automated follow-up systems for wedding enquiries.",
  "You want to scale your event business without chasing leads manually.",
];

const faqs = [
  {
    q: "How is the Wedding Leads Pipeline different from regular agencies?",
    a: "We focus on qualified wedding enquiries, not random leads, using a complete couple-to-appointment pipeline that pre-qualifies every enquiry before they reach you.",
  },
  {
    q: "How soon can we expect results?",
    a: "Most planners start seeing qualified enquiries in 1-2 weeks, depending on offer clarity, ad readiness, and response speed.",
  },
  {
    q: "Will you work with other wedding planners in my city?",
    a: "Usually we work with one planner per local area and service category to avoid overlap and protect lead quality.",
  },
  {
    q: "What if it doesn't work for my company?",
    a: "If results are off-track, we diagnose quickly, adjust targeting and messaging, and improve the funnel before scaling.",
  },
  {
    q: "Do I need a website or social media presence?",
    a: "No full website is required. A basic profile and clear service details are enough to start the pipeline.",
  },
  {
    q: "What type of couples will this attract?",
    a: "Primarily serious couples actively planning their wedding and looking for trusted planners, not cold or random traffic.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long lock-in by default. We start with a clear plan, review performance regularly, and continue based on results.",
  },
  
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
    owner: "yes",
  });
  const sheetsWebhookUrl =
    "https://script.google.com/macros/s/AKfycbwOiA3f3FAlMbl66C_y7EoFLgU7B4Ogb8c4E2t5mbF0QdtPlOgf4AVZLEJrEJr85X2s/exec";
  const webhookUrl = "/api/lead";
  console.log("Webhook env:", webhookUrl);

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
      owner: "yes",
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
    if (!formData.name || !formData.id || !formData.phone) {
      setErrors("Please complete all required fields.");
      return;
    }
    if (!/^\+?\d{10,}$/.test(formData.phone.replace(/\s+/g, ""))) {
      setErrors("Phone number should include at least 10 digits.");
      return;
    }

    setIsSubmitting(true);
    try {
      const ownerLabel = formData.owner === "yes" ? "Yes" : "No";
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
        qna_simple: `owner: ${ownerLabel}`,
        whatsapp_message:
          `*🚨 NEW LEAD ENQUIRY - THE WEDDING GROWTH SYSTEM!*\n\n` +
          `🔥 Status: New Lead\n` + 
          `🕒 Received Time: ${receivedTime}\n` +
          `👤 Name: ${formData.name.trim()}\n` +
          `📞 Phone: ${formData.phone.trim()}\n` +
          `📧 Email: ${formData.id.trim()}\n` +
          `🏥 Decision Maker: ${ownerLabel}\n`,
      };
      console.log("[LeadCapture] Payload", leadPayload);
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
        isClinicOwner: formData.owner === "yes",
        source: "website-enquiry",
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
      <div className={`font-semibold ${accentClass}`}>Hurry Up Only 3 slots left ....</div>
      <div>Only for wedding planners &amp; event companies serious about scaling with a structured enquiry-to-booking system.</div>
    </div>
  );

  return (
    <div className="editorial-page bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[#ecebe7] text-[#0b0b0c]">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="editorial-kicker mx-auto w-fit">
                Attention Wedding Planners &amp; Event Companies
              </div>
              <h1
                className="mx-auto max-w-4xl text-4xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">
                  We help <span className="editorial-marker">Wedding Planners</span> get
                </span>
                <span className="block">15-25 qualified</span>
                <span className="block">wedding enquiries</span>
                <span className="block">per month</span>
                <span className="block">with our proven</span>
                <span className="block sm:whitespace-nowrap">
                  <span className="editorial-marker">Wedding Growth System™</span>
                </span>
              </h1>

              <p className="handwritten text-xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-2xl"></p>
              

              <p
                className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block font-black text-[#19191b]">No price-shoppers. No ghost enquiries.</span>
                <span className="block">
                  Just budget-ready, <span className="font-black">Just serious couples</span>
                </span>
                <span className="block">with confirmed wedding dates and realistic budgets.</span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-[#d5d2ca] bg-[#f3f2ed] px-4 py-2 text-sm font-semibold text-[#222] shadow-sm">
                Expected revenue impact: ₹10L–₹30L+ per season
              </div>

             

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl text-xl font-black focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Book Your Call Now
                </button>
                
                {renderCtaNote("text-slate-600", "text-slate-800")}
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
                Every Couple Planning Their Wedding Is Carrying a Vision They're Afraid to Get Wrong.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#f2d302]" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                They come with Pinterest boards, family expectations, and a budget they've been saving for years — trusting you to make the most important day of their lives unforgettable.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                While other agencies chase follower counts, we focus on the booking journey — guiding each couple from their first search to the moment they sit across from you, ready to sign.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">But here's the reality most wedding planners face:</p>
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
                  className="cta-button cta-shine"
                >
                  Book Your Call Now
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">The Wedding Growth System</h3>
            </div>

            <div className="mt-8 space-y-12">
              {systemHighlights.map((item, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={item.titlePrefix} className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className={isReversed ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {item.titlePrefix}{" "}
                        <span className="editorial-marker">{item.accent}</span>{" "}
                        {item.titleSuffix}
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
                THIS IS A FULL STACK <span className="editorial-marker">WEDDING BUSINESS-BUILDING SYSTEM.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                Because wedding decisions aren't made through a single ad. They're shaped by a structured, emotionally intelligent system that transforms online interest into real signed contracts with your company.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine"
              >
                Book Your Call Now
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
                ⚠️ Important
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                We're Extremely Selective About Which Wedding Companies We Work With
              </h2>
              <p className="mt-3 text-lg text-slate-700">Currently, We Only Accept Planners That Meet Our Top 10% Standards</p>
              <p className="mt-3 text-base text-slate-600">
                Predictable wedding growth only works when we partner with planners who are serious about client experience and system-driven results.
                This is how we evaluate fit:
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {qualificationBoxes.map((item, idx) => (
                <div key={item.title} className="rounded-2xl border border-[#d5d2ca] bg-[#f7f6f2] p-[1px] shadow-sm">
                  <div className="rounded-2xl bg-[#f7f6f2] p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Fit Check</span>
                      <span className="text-[#c23b22]">0{idx + 1}</span>
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
                className="cta-button cta-shine"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        {/* <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Real wedding Clinics. Real Results.</h2>
            <p className="mt-3 text-center text-base text-slate-200">
              Hear directly from wedding planning company leaders using the Wedding Growth System.
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
                Book Your Free Strategy Call Now
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section> */}

        

        <section className="bg-[#ecebe7] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              APPLY FOR THIS <span className="editorial-marker">ONLY IF…</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              We don't care how large your team is. We care how serious you are about growth.
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
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-2xl rounded-xl"
              >
                Book Your Call Now
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
                      <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-base leading-7 text-slate-700">{item.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-slate-800")}
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16 text-[#111]">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">You're One Step Away From Becoming The Planner Every Couple Remembers</h2>
            <p className="mt-4 text-xl text-slate-700">
              Most wedding companies lose clients not because they lack talent... but because excited, overwhelmed couples never got the clarity, confidence, and guidance they needed to say yes.
              With our system, every couple feels understood, supported, and ready to sign with you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md text-xl font-semibold hover:shadow-xl"
              >
                Book Your Call Now
              </button>
              {renderCtaNote("text-slate-600", "text-slate-800")}
              
              <p className="text-xs italic text-slate-500">
                Your application will be carefully reviewed. If your company isn't a suitable fit, we'll let you know honestly and respectfully.
              </p>
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
                <div className="text-lg font-semibold text-slate-900">Quick Check Before Booking</div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-200"
              >
                ✕
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
                    placeholder="[Your Name] or [Your Full Name]"
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
                    placeholder="+91 "
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                  <p className="text-xs text-slate-500">We'll send appointment confirmation via WhatsApp</p>
                </label>

                <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Are you the owner or decision-maker of a wedding planning / event management company?*</div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { label: "✅ Yes", value: "yes" },
                      { label: "⛔ No", value: "no" },
                    ].map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setFormData({ ...formData, owner: option.value as "yes" | "no" })}
                        className={`rounded-lg border px-3 py-3 text-left text-sm font-semibold transition ${
                          formData.owner === option.value ? "border-[#0066FF] bg-blue-50 text-[#0B1534]" : "border-slate-200 bg-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {formData.owner === "no" && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                      This program is designed for business owners. If you're a team member, please share this with your founder.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-slate-100 px-6 py-5">
              {formData.owner === "yes" ? (
                <button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="cta-button cta-shine w-full max-w-sm bg-[#0066FF] text-white hover:bg-[#0a58d8] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Sumit and Proceed"}
                </button>
              ) : (
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="cta-button w-full max-w-sm bg-slate-200 text-slate-700 hover:bg-slate-300"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
