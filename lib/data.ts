// Practice data — EIMS-এর event আর survey-র মতো করে বানানো।
// এই ফাইলটা বদলাতে হবে না, শুধু import করে ব্যবহার করবে।

export type EventStatus = "draft" | "published" | "cancelled";

export type EventItem = {
  id: number;
  title: string;
  district: string;
  date: string; // "YYYY-MM-DD"
  status: EventStatus;
};

export const events: EventItem[] = [
  { id: 1, title: "Youth skills fair", district: "Dhaka", date: "2026-10-12", status: "published" },
  { id: 2, title: "Union committee meeting", district: "Savar", date: "2026-10-15", status: "draft" },
  { id: 3, title: "NEET orientation", district: "Rangpur", date: "2026-10-20", status: "published" },
  { id: 4, title: "Trade training kickoff", district: "Khulna", date: "2026-11-02", status: "cancelled" },
  { id: 5, title: "Household survey briefing", district: "Dhaka", date: "2026-11-05", status: "published" },
];

export type SurveyTarget = {
  id: number;
  location: string;
  householdTarget: number;
  beneficiaryTarget: number;
};

export const surveyTargets: SurveyTarget[] = [
  { id: 1, location: "Savar", householdTarget: 120, beneficiaryTarget: 300 },
  { id: 2, location: "Rangpur Sadar", householdTarget: 80, beneficiaryTarget: 150 },
  { id: 3, location: "Khulna Sadar", householdTarget: 200, beneficiaryTarget: 410 },
];
