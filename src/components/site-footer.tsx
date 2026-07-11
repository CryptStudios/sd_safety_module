export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#06111d]">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-300 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
              SD Safety Module
            </p>
            <p className="max-w-3xl leading-7 text-slate-300">
              This site is for internal safety training organization and documentation only.
              Completion records, signatures, and form submissions are handled through the
              company's approved external form system.
            </p>
            <p className="text-sm font-medium text-slate-400">Created by Maxwell Jung.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
              Contact
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              Questions about assigned training should be directed to your supervisor or
              safety administrator.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
