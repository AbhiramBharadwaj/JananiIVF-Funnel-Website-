import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const WEBHOOK_URL = "https://n8n.autonetlabs.com/webhook/lead-notify";

const BookingDemoPage = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    const answers = Object.fromEntries(formData.entries());

    const payload = {
      source: "bookingdemopage",
      submitted_at: new Date().toISOString(),
      answers,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Failed to post booking demo webhook", error);
    } finally {
      setIsSubmitting(false);
      navigate("/thankyoudemopage");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      <main className="mx-auto max-w-4xl px-4 py-14 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-[#171717] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-10">
          <form ref={formRef} className="space-y-6">
            <div className="text-center sm:text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Best Qualifying Questions for Funnel
              </div>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Answer a few quick questions</h1>
              <p className="mt-3 text-sm text-white/60">Select the best option or type your answer.</p>
            </div>

            <div className="space-y-6 text-white/90">
              <div className="space-y-2">
                <div className="text-base font-semibold">What&apos;s the name of your company?</div>
                <input
                  type="text"
                  name="company_name"
                  defaultValue="Mahavir hospital"
                  className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">Which city is your company located in?</div>
                <input
                  type="text"
                  name="company_city"
                  defaultValue="Bangalore"
                  className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">1. What&apos;s your main concern? (Select one)</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Difficulty conceiving naturally</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Age-related wedding planning challenges</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Previous failed wedding attempts</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>low-intent enquiries</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>unclear client requirements</span>
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="mainConcern" className="h-4 w-4 accent-[#2f5bff]" />
                      <span>Other</span>
                    </label>
                    <input
                      type="text"
                      name="main_concern_other"
                      placeholder="Please specify"
                      className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">2. How long have you been trying to conceive?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeTrying" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Less than 1 year</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeTrying" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>1-2 years</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeTrying" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>2-3 years</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="timeTrying" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>3+ years</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">3. Have you consulted a wedding growth specialist before?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="consultedBefore" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, and we&apos;ve tried wedding before</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="consultedBefore" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, but haven&apos;t started treatment</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="consultedBefore" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>No, this is our first time</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">
                  4. Your typical wedding planning package starts around INR 1.5-2 lakhs. Is this within your target client budget range?
                </div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="budget" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, we&apos;re prepared for this investment</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="budget" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>We need to discuss financing options</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="budget" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>This is higher than we expected</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">5. Woman&apos;s age?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="womansAge" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Under 30</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="womansAge" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>30-35</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="womansAge" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>35-40</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="womansAge" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>40-45</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="womansAge" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Over 45</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">6. Are you located in or near your city?</div>
                <input
                  type="text"
                  name="location_city"
                  placeholder="Enter city"
                  className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                />
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="location" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, within 20km</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="location" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, within 50km</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="location" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>No, but willing to travel</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">7. When are you hoping to start treatment?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="treatmentStart" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Within 1 month</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="treatmentStart" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>1-3 months</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="treatmentStart" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>3-6 months</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="treatmentStart" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Just exploring options</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">8. How did you hear about us?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Google search</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Facebook/Instagram ad</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="source" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Friend/family referral</span>
                  </label>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="source" className="h-4 w-4 accent-[#2f5bff]" />
                      <span>Other</span>
                    </label>
                    <input
                      type="text"
                      name="source_other"
                      placeholder="Please specify"
                      className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 text-base font-semibold text-white/80">Bonus Questions (Add If Clinic Wants)</div>

              <div className="space-y-2">
                <div className="text-base font-semibold">9. Have you completed any lead qualification checks?</div>
                <div className="grid gap-2 text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="qualificationChecks" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, we have recent reports</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="qualificationChecks" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>Yes, but from over a year ago</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="qualificationChecks" className="h-4 w-4 accent-[#2f5bff]" />
                    <span>No, not yet</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold">10. What&apos;s your biggest concern about booking quality?</div>
                <textarea
                  name="wedding_biggest_concern"
                  placeholder="Share your concern"
                  rows={3}
                  className="w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="cta-button cta-shine w-full bg-[#2f5bff] text-white hover:bg-[#2448d8] sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit & Book the Call"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookingDemoPage;
