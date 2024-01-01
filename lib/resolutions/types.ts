export interface Resolution {
  name: string;
  goal: number;
  progress: number;
  unit: string;
  plural: string;
  redacted?: boolean;
}

export interface Resolutions {
  resolutions: Resolution[];
  year: string;
}
