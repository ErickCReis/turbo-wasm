"use client";

import { useState } from "react";
import styles from "./page.module.css";

import { get_factorial, initExampleRust } from "@repo/rust-lib";
initExampleRust();

export default function Home() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState("");

  return (
    <div className={styles.page}>
      <input
        type="number"
        value={value.toString()}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={async () => {
          const factorial = await get_factorial(value);
          setResult(factorial);
        }}
      >
        Factorio
      </button>
      <div>Result: {result}</div>
    </div>
  );
}
