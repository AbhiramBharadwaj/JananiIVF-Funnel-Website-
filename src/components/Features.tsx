import React, { useEffect, useRef } from "react";

const transformations = [
  {
    before: "Manually call every lead and follow up 3-4 times per week.",
    after: "AI voice agent handles all follow-ups, 24/7 — no human needed.",
  },
  {
    before: "Staff spends hours on data entry into CRMs and spreadsheets.",
    after: "Data flows automatically via Make.com and custom workflows.",
  },
  {
    before: "Patients miss appointments due to no reminders.",
    after: "Automated reminder calls and texts reduce no-shows by 80%.",
  },
  {
    before: "New inquiries wait hours before getting a callback.",
    after: "AI instantly engages new leads and books them automatically.",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-16 sm:py-20 bg-white relative"
      id="transformation"
      ref={sectionRef}
    >
      <div className="section-container text-center">
        <div className="pulse-chip mx-auto mb-4">
          <span>Before & After</span>
        </div>
        <h2 className="section-title mb-8">
          See the Difference Automation Makes
        </h2>
        <p className="section-subtitle mb-12 max-w-3xl mx-auto">
          Here’s how real companies and teams transformed their operations using
          our automation and AI systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left transition-all hover:shadow-md"
            >
              <h3 className="text-sm uppercase font-bold text-red-500 mb-2">
                Before
              </h3>
              <p className="text-gray-700 mb-4">{item.before}</p>
              <h3 className="text-sm uppercase font-bold text-green-600 mb-2">
                After
              </h3>
              <p className="text-gray-900 font-semibold">{item.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
