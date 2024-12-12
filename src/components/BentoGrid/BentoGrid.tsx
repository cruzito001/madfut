import React from "react";
import styles from "./BentoGrid.module.css";

const BentoGrid: React.FC = () => {
  return (
    <section className={styles.bentoGrid}>
      <h2 className={styles.sectionTitle}>Community Contributors</h2>
      <div className={styles.gridContainer}>
        <div className={`${styles.bentoItem} ${styles.redditTheme}`}>
          <h3>Big thanks to u/tm4p29!</h3>
          <p>
            For sharing amazing SBC solutions and FATAL team builds that help
            our community. Your contributions are truly appreciated!
          </p>
          <a
            href="https://www.reddit.com/user/tm4p29"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redditLink}
          >
            Visit u/tm4p29 on Reddit
          </a>
        </div>
        <div className={`${styles.bentoItem} ${styles.redditTheme}`}>
          <h3>Big thanks to u/Striking_Beat4479!</h3>
          <p>
            Your contributions to MADFUT SBCs and innovative FATAL team
            strategies are invaluable. Keep up the great work!
          </p>
          <a
            href="https://www.reddit.com/user/Striking_Beat4479"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redditLink}
          >
            Check out u/Striking_Beat4479's Reddit
          </a>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
