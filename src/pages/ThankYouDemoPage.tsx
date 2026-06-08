const ThankYouDemoPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      <main className="mx-auto max-w-4xl px-4 py-14 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-[#171717] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="space-y-8">
            <div className="text-center sm:text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Demo Confirmation</div>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Thanks for booking your call.
              </h1>
              <p className="mt-3 text-sm text-white/60">
                We&apos;ll review your answers and reach out with the next steps shortly.
              </p>
            </div>

            

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/80">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Meeting Details</div>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold text-white/90">What:</span> The Wedding Growth System - 30 Min between autonetlabs and Vinay Bagwe
                </p>
                <p>
                  <span className="font-semibold text-white/90">When:</span> Wednesday, January 14, 2026 • 5:00 PM - 5:30 PM (India Standard Time)
                </p>
                <p>
                  <span className="font-semibold text-white/90">Where:</span> Google Meet
                </p>
                <p>
                  <span className="font-semibold text-white/90">Host:</span> autonetlabs • info.autonetlabs@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-white/90">Guest:</span> Vinay Bagwe • +919619480252 • bagaweVinay@gmail.com
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-white/80">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Clinic Details</div>
              <div className="mt-4 space-y-2">
                <p><span className="font-semibold text-white/90">Clinic:</span> Mahavir hospital</p>
                <p><span className="font-semibold text-white/90">City:</span> Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouDemoPage;
