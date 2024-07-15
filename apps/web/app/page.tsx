"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

import { get_factorial, initExampleRust } from "@repo/rust-lib/lib";

export default function Home() {
  useEffect(() => {
    initExampleRust();
  }, []);

  return (
    <div className={styles.page}>
      <button
        onClick={async () => {
          const factorial = await get_factorial(11);
          alert(factorial);
        }}
      >
        Factorio
      </button>
    </div>
  );
}
