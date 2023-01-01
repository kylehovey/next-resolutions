import Head from "next/head";
import styles from "../styles/Home.module.css";

interface Resolution {
  name: string;
  goal: number;
  progress: number;
  unit: string;
}

const resolutions: Resolution[] = [
  {
    name: "Invest 60% of annual income",
    goal: 60,
    progress: 0,
    unit: "%",
  },
  {
    name: "Read 5 books",
    goal: 5,
    progress: 0,
    unit: "book",
  },
  {
    name: "Go on 10 camping/backpacking trips",
    goal: 10,
    progress: 0,
    unit: "camping trip",
  },
  {
    name: "Squat my own weight",
    goal: 155,
    progress: 130,
    unit: "lb",
  },
  {
    name: "Create and order a PCB",
    goal: 1,
    progress: 0,
    unit: "PCB",
  },
  {
    name: "Write and record one song",
    goal: 1,
    progress: 0,
    unit: "song",
  },
  {
    name: "Go on a road trip",
    goal: 1,
    progress: 0,
    unit: "road trip",
  },
  {
    name: "Get VO2 max above 50",
    goal: 50,
    progress: 0,
    unit: "METS",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>2023 Resolutions</title>
        <meta
          name="description"
          content="Kyle Hovey's 2023 New Years Resolutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>2023 Resolutions</h1>
          <hr />
          <div className={styles.resolutions}>
            {resolutions.map((resolution) => (
              <div className={styles.resolution} key={resolution.name}>
                {resolution.name}
                {resolution.progress}/{resolution.goal}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
