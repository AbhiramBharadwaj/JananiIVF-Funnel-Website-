import React from "react";

const NotEligible = () => (
  <div className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
        Status update
      </div>
      <h1 className="text-3xl font-bold text-[#0B1534]">Thanks for your time</h1>
      <p className="mt-4 text-lg text-slate-700">
        Our system/program/service is not applicable to you at this moment.
      </p>
      <p className="mt-2 text-base text-slate-600">
        We appreciate your interest and wish you the best.
      </p>
    </div>
  </div>
);

export default NotEligible;
