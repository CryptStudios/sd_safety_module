export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-ink text-[#f5efe2]">
      <div className="mx-auto max-w-7xl px-4 py-12 text-sm sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <p className="eyebrow text-hi">SD Safety Module</p>
            <p className="max-w-3xl leading-7 text-[#c9c2b2]">
              This site is for internal safety training organization and documentation only.
              Completion records, signatures, and form submissions are handled through the
              company's approved external form system.
            </p>
            <p className="text-sm font-medium text-[#8c8676]">Created by Maxwell Jung.</p>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-white/5 p-5">
            <p className="eyebrow text-hi">Contact</p>
            <p className="mt-3 leading-7 text-[#c9c2b2]">
              Questions about assigned training should be directed to your supervisor or
              safety administrator.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
