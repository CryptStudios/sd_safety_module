import { ClipboardIcon } from "@/components/icons";
import {
  incidentInvestigationFormUrl,
  weeklySafetyInspectionReportUrl,
} from "@/lib/training-data";

export default function GeneralAcknowledgmentPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <section className="rounded-[16px] border border-white/10 bg-ink p-6 text-center text-[#f5efe2] shadow-[0_36px_100px_-50px_rgba(0,0,0,0.9)] sm:p-10 lg:p-16">
        <div className="mx-auto flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[14px] border border-hi/25 bg-hi-soft sm:h-24 sm:w-24 sm:rounded-[16px]">
            <ClipboardIcon />
          </div>
        </div>
        <p className="mt-6 eyebrow text-hi">
          Forms & Reports
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
          Safety forms and reporting links
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-[#c9c2b2] sm:text-lg sm:leading-9">
          Use these links for incident reporting and weekly safety inspection reporting.
        </p>
        <div className="mt-10 grid gap-6 text-left lg:mt-14 lg:grid-cols-2 lg:gap-8">
          <article className="flex h-full flex-col rounded-[16px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <p className="eyebrow text-hi">
              Incident / Accident Investigation Form
            </p>
            <p className="mt-6 text-lg leading-9 text-[#c9c2b2] sm:mt-8 sm:text-xl sm:leading-10">
              Use this form to submit incident and accident investigation information.
            </p>
            <a
              href={incidentInvestigationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-hi px-6 py-4 text-lg font-semibold text-[#f5efe2] transition hover:bg-hi-deep sm:mt-auto sm:min-h-16 sm:text-2xl"
            >
              Open Investigation Form
            </a>
          </article>

          <article className="flex h-full flex-col rounded-[16px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <p className="eyebrow text-hi">
              Weekly Safety Inspection Report
            </p>
            <p className="mt-6 text-lg leading-9 text-[#c9c2b2] sm:mt-8 sm:text-xl sm:leading-10">
              Use this link to access the weekly safety inspection report.
            </p>
            <a
              href={weeklySafetyInspectionReportUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-hi px-6 py-4 text-lg font-semibold text-[#f5efe2] transition hover:bg-hi-deep sm:mt-auto sm:min-h-16 sm:text-2xl"
            >
              Open Inspection Report
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
