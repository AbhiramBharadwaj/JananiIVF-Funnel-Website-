import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let calApi: any;
    const handleBookingSuccess = () => {
      navigate("/thank-you");
    };

    (async function () {
      calApi = await getCalApi({ namespace: "the-wedding-growth-system-30-min" });
      calApi("ui", {
        theme: "light",
        cssVarsPerTheme: { dark: { "cal-brand": "#ffdd00" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      calApi("on", {
        action: "bookingSuccessfulV2",
        callback: handleBookingSuccess,
      });
    })();

    return () => {
      if (!calApi) return;
      calApi("off", {
        action: "bookingSuccessfulV2",
        callback: handleBookingSuccess,
      });
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0B1534] via-[#0E1F50] to-[#0B3B98] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
            Step 2 - Schedule your call
          </div>
          <h1 className="text-3xl font-bold text-[#0B1534]">Book Your Call Now</h1>
          <p className="mt-2 text-slate-700">Pick a time that works best for you. The calendar below is live.</p>
          <div className="mt-4 rounded-xl border border-[#0B3B98]/20 bg-gradient-to-r from-blue-50 via-white to-orange-50 px-4 py-3 text-sm font-semibold text-[#0B1534]">
            The booking calendar can take a few seconds to load. Please wait if it doesn't appear right away.
          </div>
          <div className="mt-4 flex flex-col items-center text-sm font-semibold text-[#0B3B98]">
            <span>Scroll down to see available times</span>
            <svg
              className="mt-1 h-5 w-5 text-[#0B3B98]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <div className="h-[720px] w-full overflow-hidden rounded-2xl bg-white shadow-sm">
          <Cal
            namespace="the-wedding-growth-system-30-min"
            calLink="autonetlabs/the-wedding-growth-system-30-min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
