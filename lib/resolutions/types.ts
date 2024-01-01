export interface Resolution {
  name: string;
  goal: number;
  progress: number;
  unit: string;
  plural: string;
  redacted?: boolean;
  success?: (progress: number) => boolean;
}

export interface Resolutions {
  resolutions: Resolution[];
  year: string;
}
