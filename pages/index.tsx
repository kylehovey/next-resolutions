import Head from "next/head";
import styles from "../styles/Home.module.css";

interface Resolution {
  name: string;
  goal: number;
  progress: number;
  unit: string;
  plural: string;
  redacted?: boolean;
}

const resolutions: Resolution[] = [
  {
    name: "Read 5 books",
    goal: 5,
    progress: 0,
    unit: "book",
    plural: "books",
  },
  {
    name: "Go on 10 camping/backpacking trips",
    goal: 10,
    progress: 0,
    unit: "camping trip",
    plural: "camping trips",
  },
  {
    name: "Squat my own weight",
    goal: 155,
    progress: 130,
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
    progress: 0,
    unit: "road trip",
    plural: "road trips",
  },
  {
    name: "Get VO2 max above 50",
    goal: 50,
    progress: 38,
    unit: "METS",
    plural: "METS",
  },
  {
    name: "Invest ██% of annual income",
    goal: 60,
    progress: 0,
    unit: "%",
    plural: "%",
    redacted: true,
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
                <span className={styles.resolutionTitle}>
                  {resolution.name}
                </span>
                <div className={styles.progressContainer}>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={
                        resolution.progress >= resolution.goal
                          ? styles.progressBarCompleted
                          : styles.progressBar
                      }
                      style={{
                        width: `${Math.round(
                          Math.min(
                            (100 * resolution.progress) / resolution.goal,
                            100
                          )
                        ).toFixed()}%`,
                      }}
                    />
                  </div>
                  <div className={styles.progressDescription}>
                    <span className={styles.progressAmount}>
                      {resolution.redacted ? "█" : resolution.progress}
                    </span>
                    <span className={styles.progressUnits}>
                      {resolution.progress > 1 || resolution.progress === 0
                        ? resolution.plural
                        : resolution.unit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
