import React from "react";
import sbcGroups from "../../data/sbc-data";
import styles from "./LatestSBC.module.css";

const LatestSBC: React.FC = () => {
  const latestSBCs = sbcGroups.sort((a, b) => b.order - a.order).slice(0, 4);

  return (
    <section className={styles.latestSBC}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest SBCs</h2>
        <a href="/sbc" className={styles.viewAllButton}>
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.buttonIcon}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className={styles.sbcGrid}>
        {latestSBCs.map((sbc, index) => (
          <a
            href={`/sbc/${sbc.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={sbc.name}
            className={`${styles.sbcItem} ${
              index === 3 ? styles.desktopHidden : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={sbc.imageUrl}
                alt={sbc.name}
                className={styles.sbcImage}
              />
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.sbcContent}>
              <h3 className={styles.sbcName}>{sbc.name}</h3>
              <p className={styles.sbcCount}>{sbc.templatesCount} templates</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestSBC;
