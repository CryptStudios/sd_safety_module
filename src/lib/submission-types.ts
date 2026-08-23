import type { UserRole } from "@/lib/server/account-store";

export type SubmissionKind =
  | "toolbox-talk"
  | "incident-investigation"
  | "weekly-safety-inspection";

export type SubmissionRecord = {
  id: string;
  companyId: string;
  kind: SubmissionKind;
  email?: string;
  workerName: string;
  attendeeNames: string[];
  employerName: string;
  supervisorName: string;
  projectName: string;
  notes: string;
  signature: string;
  submittedAt: string;
  presenterStatus?: "yes" | "no";
  hardCopyGenerated?: "yes" | "no";
  uploadedFileName?: string;
  uploadedFilePath?: string;
  uploadedOriginalName?: string;
  topicSlug?: string;
  topicTitle?: string;
  categorySlug?: string;
  categoryTitle?: string;
  submittedByUserId?: string;
  submittedByUsername?: string;
  submittedByDisplayName?: string;
  submittedByRole?: UserRole;
};

export type SubmissionPayload = Omit<SubmissionRecord, "id" | "submittedAt" | "companyId"> & {
  companyId?: string;
};
