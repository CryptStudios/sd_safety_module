import { Document, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";

import type { SubmissionRecord } from "@/lib/submission-types";

const kindLabels: Record<SubmissionRecord["kind"], string> = {
  "toolbox-talk": "Toolbox Talk Attendance",
  "incident-investigation": "Incident / Accident Investigation",
  "weekly-safety-inspection": "Weekly Safety Inspection",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  companyName: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  eyebrow: {
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#C4501A",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  meta: {
    fontSize: 9,
    color: "#555555",
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    color: "#C4501A",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    borderBottomStyle: "solid",
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    width: 150,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
  },
  value: {
    flex: 1,
    color: "#222222",
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.5,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 9,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

function Field({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "—"}</Text>
    </View>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(value));
}

function SubmissionDocument({
  submission,
  companyName,
}: {
  submission: SubmissionRecord;
  companyName: string;
}) {
  const noteBlocks = submission.notes ? submission.notes.split("\n\n").filter(Boolean) : [];

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.eyebrow}>Submit Daily Safety Module</Text>
        <Text style={styles.title}>{kindLabels[submission.kind]}</Text>
        <Text style={styles.meta}>
          Submitted {formatDate(submission.submittedAt)} · Record ID {submission.id}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Submission Details</Text>
          <Field label="Submitted By" value={submission.workerName} />
          {submission.email ? <Field label="Email" value={submission.email} /> : null}
          <Field label="Project" value={submission.projectName} />
          <Field label="Employer" value={submission.employerName} />
          <Field label="Supervisor" value={submission.supervisorName} />
          {submission.topicTitle ? <Field label="Topic" value={submission.topicTitle} /> : null}
          {submission.categoryTitle ? (
            <Field label="Category" value={submission.categoryTitle} />
          ) : null}
          {submission.presenterStatus ? (
            <Field label="Presenter" value={submission.presenterStatus === "yes" ? "Yes" : "No"} />
          ) : null}
          {submission.hardCopyGenerated ? (
            <Field
              label="Hard Copy Generated"
              value={submission.hardCopyGenerated === "yes" ? "Yes" : "No"}
            />
          ) : null}
          <Field label="Signature" value={submission.signature} />
        </View>

        {submission.attendeeNames.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Attendance ({submission.attendeeNames.length})
            </Text>
            <View style={styles.chipRow}>
              {submission.attendeeNames.map((name) => (
                <Text key={name} style={styles.chip}>
                  {name}
                </Text>
              ))}
            </View>
          </View>
        ) : null}

        {noteBlocks.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {submission.kind === "toolbox-talk" ? "Notes" : "Form Responses"}
            </Text>
            {noteBlocks.map((block, index) => (
              <Text key={index} style={styles.paragraph}>
                {block}
              </Text>
            ))}
          </View>
        ) : null}

        {submission.uploadedOriginalName ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Attachment</Text>
            <Text>{submission.uploadedOriginalName}</Text>
          </View>
        ) : null}
      </Page>
    </Document>
  );
}

export async function renderSubmissionPdf(
  submission: SubmissionRecord,
  companyName: string,
): Promise<Buffer> {
  return renderToBuffer(<SubmissionDocument submission={submission} companyName={companyName} />);
}
