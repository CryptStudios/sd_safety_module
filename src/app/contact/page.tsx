export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-white/10 bg-ink p-8 text-center text-[#f5efe2] shadow-[0_36px_100px_-50px_rgba(0,0,0,0.9)] lg:p-12">
        <p className="eyebrow text-hi">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Questions about assigned training</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#c9c2b2]">
          Questions about assigned training should be directed to your supervisor or safety
          administrator.
        </p>
        <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
          <div className="rounded-[14px] border border-white/10 bg-white/5 p-5 text-left">
            <p className="eyebrow text-hi">Email</p>
            <p className="mt-3 text-sm text-[#c9c2b2]">michaela@submitdaily.com</p>
          </div>
          <div className="rounded-[14px] border border-white/10 bg-white/5 p-5 text-left">
            <p className="eyebrow text-hi">Phone</p>
            <p className="mt-3 text-sm text-[#c9c2b2]">609-816-7200</p>
          </div>
        </div>
      </section>
    </div>
  );
}
