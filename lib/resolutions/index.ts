import type { Resolution, Resolutions } from "./types";
import twentyThree from "./2023";
import twentyFour from "./2024";

const years: Resolutions[] = [twentyThree, twentyFour];

export const isCompleted = (resolution: Resolution): boolean =>
  resolution?.success
    ? resolution.success(resolution.progress)
    : resolution.progress >= resolution.goal;

export default years;
