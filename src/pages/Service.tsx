import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const Service = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (!showCalendar) return;
    (async function () {
      const cal = await getCalApi({ namespace: "the-wedding-growth-system-30-min" });
      cal("ui", {
        cssVarsPerTheme: { dark: { "cal-brand": "#ffe900" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [showCalendar]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Step 1 - Company details
          </div>
          <h1 className="text-3xl font-bold text-[#0B1534]">Help Us Understand Your Business</h1>
          <p className="mt-2 text-slate-700">
            Since you're not the final decision maker, please share a few details so we can tailor the strategy call.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-800">Company Name*</span>
              <input
                placeholder="Company Name"
                className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-800">City*</span>
              <input
                placeholder="Bangalore..."
                className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-800">Biggest Challenge*</span>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none">
                <option value="">Select</option>
                <option>Not enough enquiry bookings</option>
                <option>Low-quality leads</option>
                <option>High no-show rates</option>
                <option>Inconsistent monthly appointments</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-800">Your Role*</span>
              <input
                placeholder="Marketing Manager, Operations, Founder..."
                className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setShowCalendar(true)}
              className="cta-button cta-shine w-full max-w-md bg-[#0066FF] text-white hover:bg-[#0a58d8]"
            >
              Book Your Call Now
            </button>
            <div className="text-center text-xs text-slate-500">
              Hurry Up Only 3 slots left ....
              <br />
              Only for wedding planning companies &amp; event companies serious about scaling with a structured enquiry-to-booking system.
            </div>
          </div>
        </div>

        {showCalendar && (
          <div className="h-[720px] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
            <Cal
              namespace="the-wedding-growth-system-30-min"
              calLink="autonetlabs/the-wedding-growth-system-30-min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
