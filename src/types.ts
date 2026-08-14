export type ThemeMode = 'dark' | 'light';

export interface HydrationCalcInput {
  weightKg: number;
  activityMinutes: number;
  climate: 'temperate' | 'hot' | 'humid';
  unit: 'ml' | 'oz';
}

export interface HydrationCalcResult {
  dailyTargetMl: number;
  dailyTargetOz: number;
  recommendedGlasses: number;
  schedule: Array<{
    time: string;
    amountMl: number;
    amountOz: number;
    label: string;
  }>;
}

export interface DeletionRequestForm {
  fullName: string;
  email: string;
  googleAccountId?: string;
  reason: string;
  confirmUnderstand: boolean;
}

export interface DeletionRequestResponse {
  requestId: string;
  status: 'PENDING' | 'SCHEDULED' | 'COMPLETED';
  estimatedCompletion: string;
  message: string;
}

export interface SupportTicketForm {
  name: string;
  email: string;
  subject: string;
  deviceModel: string;
  androidVersion: string;
  message: string;
}

export interface PrivacySectionData {
  id: string;
  number: number;
  title: string;
  content: string;
  subsections?: Array<{
    heading: string;
    text: string;
    bullets?: string[];
  }>;
}
