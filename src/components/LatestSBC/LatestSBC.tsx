import React from "react";
import sbcGroups from "../../data/sbc-data";
import styles from "./LatestSBC.module.css";

const LatestSBC: React.FC = () => {
  const latestSBCs = sbcGroups.sort((a, b) => b.order - a.order).slice(0, 4);

  return (
    <section className={styles.latestSBC}>
      <h2 className={styles.title}>Latest SBCs</h2>
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
