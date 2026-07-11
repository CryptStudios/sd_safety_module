export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[2.25rem] border border-white/10 bg-[#071423] p-8 text-center text-white shadow-[0_36px_100px_-50px_rgba(0,0,0,0.9)] lg:p-12">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">Contact</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Questions about assigned training</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-300">
          Questions about assigned training should be directed to your supervisor or safety
          administrator.
        </p>
        <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Email</p>
            <p className="mt-3 text-sm text-slate-200">michaela@submitdaily.com</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Phone</p>
            <p className="mt-3 text-sm text-slate-200">609-816-7200</p>
          </div>
        </div>
      </section>
    </div>
  );
}
