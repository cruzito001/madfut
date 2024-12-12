import React from "react";
import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  // Empty interface for now, can be extended later if needed
}

const ComingSoon: React.FC<ComingSoonProps> = () => {
  return (
    <div className={styles.comingSoonContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Coming Soon</h2>
        <p className={styles.description}>
          We're working on something exciting. Stay tuned!
        </p>
        <div className={styles.animatedCircles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
