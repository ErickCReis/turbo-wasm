"use client";

import styles from "./page.module.css";

import { get_factorial, initExampleRust } from "@repo/rust-lib/lib";

export default function Home() {
  return (
    <div className={styles.page}>
      <button
        onClick={async () => {
          await initExampleRust();
          const factorial = await get_factorial(10);
          alert(factorial);
        }}
      >
        Factorio
      </button>
    </div>
  );
}
