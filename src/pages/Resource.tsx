import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resource = () => {
  const shareUrl = "https://example.com/wedding-growth-system";
  const [copied, setCopied] = useState(false);
  const emailTemplate = `Hi [Owner Name],\n\nI came across a client acquisition system specifically built for wedding planning companies. They guarantee 20-30+ qualified enquiry bookings per month using a complete appointment pipeline.\n\nThought it might be worth exploring for our company.\n\nHere's the link: ${shareUrl}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-[#0B3B98] hover:underline">
            ← Back to landing page
          </Link>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">Wedding Growth System™</div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            For team members - Share with the decision maker
          </div>
          <h1 className="text-3xl font-bold text-[#0B3B98]">Thank You For Your Interest!</h1>
          <p className="mt-3 text-lg text-slate-700">
            Since implementing our system requires approval from the company owner or decision-maker, we've prepared something valuable for you:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0B3B98]">Offer 1: Lead Magnet</div>
              <h2 className="mt-2 text-xl font-bold">Download Our Free Guide:</h2>
              <p className="mt-2 text-slate-700">"The 7-Step Wedding Business Growth Checklist"</p>
              <p className="mt-2 text-slate-600">How to audit your enquiry pipeline and identify exactly where qualified leads are dropping off</p>
              <button
                onClick={() => copyToClipboard("https://example.com/7-step-wedding-growth-checklist.pdf")}
                className="mt-4 w-full rounded-lg bg-[#0066FF] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a58d8]"
              >
                Download Free PDF (copy link)
              </button>
              <p className="mt-1 text-xs text-slate-500">We copied the download link so you can grab it or share it instantly.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#0B3B98]">Offer 2: Share With Owner</div>
              <h2 className="mt-2 text-xl font-bold">Share This With Your Founder</h2>
              <p className="mt-2 text-slate-700">Copy this link and send it to your decision-maker:</p>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                <span className="truncate">{shareUrl}</span>
                <button
                  onClick={() => copyToClipboard(shareUrl)}
                  className="whitespace-nowrap rounded-md bg-[#0B3B98] px-3 py-1 text-xs font-semibold text-white hover:bg-[#0a2f7a]"
                >
                  Copy link
                </button>
              </div>
              <p className="mt-4 text-slate-700">Or forward them this quick email:</p>
              <textarea
                readOnly
                value={emailTemplate}
                className="mt-3 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800 focus:outline-none"
                rows={7}
              />
              <button
                onClick={() => copyToClipboard(emailTemplate)}
                className="mt-3 w-full rounded-lg bg-[#0066FF] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a58d8]"
              >
                Copy Email Template
              </button>
            </div>
          </div>

          {copied && <div className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">Copied to clipboard.</div>}
        </div>
      </div>
    </div>
  );
};

export default Resource;
