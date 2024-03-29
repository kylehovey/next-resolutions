import type { Resolution } from "./types";

const resolutions: Resolution[] = [
  {
    name: "Read 5 books",
    goal: 5,
    progress: 6,
    unit: "book",
    plural: "books",
  },
  {
    name: "Go on 10 camping/backpacking trips",
    goal: 10,
    progress: 5,
    unit: "camping trip",
    plural: "camping trips",
  },
  {
    name: "Squat my own weight",
    goal: 160,
    progress: 140,
    unit: "lb",
    plural: "lbs",
  },
  {
    name: "Create and order a PCB",
    goal: 1,
    progress: 0,
    unit: "PCB",
    plural: "PCBs",
  },
  {
    name: "Write and record one song",
    goal: 1,
    progress: 0,
    unit: "song",
    plural: "songs",
  },
  {
    name: "Go on a road trip",
    goal: 1,
    progress: 1,
    unit: "road trip",
    plural: "road trips",
  },
  {
    name: "Get VO2 max above 50",
    goal: 50,
    progress: 40,
    unit: "METS",
    plural: "METS",
  },
  {
    name: "Invest ██% of annual income",
    goal: 60,
    progress: Math.round(75),
    unit: "%",
    plural: "%",
    redacted: true,
  },
];

export default { resolutions, year: "2023" };
