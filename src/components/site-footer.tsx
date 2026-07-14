export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-bg text-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 text-sm sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <p className="eyebrow text-hi-deep">Submit Daily Safety Module</p>
            <p className="max-w-3xl leading-7 text-ink-2">
              This site is for internal safety training organization and documentation only.
              Completion records, signatures, and form submissions are handled through the
              company's approved external form system.
            </p>
          </div>
          <div className="rounded-[16px] border border-rule bg-paper p-5 shadow-[0_20px_50px_rgba(24,21,15,0.06)]">
            <p className="eyebrow text-hi-deep">Contact</p>
            <p className="mt-3 leading-7 text-ink-2">
              Questions about assigned training should be directed to your supervisor or
              safety administrator.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
