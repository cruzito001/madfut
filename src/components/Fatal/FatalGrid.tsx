import React, { useState } from "react";
import fatalSeries from "../../data/fatal-data";
import styles from "./FatalGrid.module.css";

const FatalGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className={styles.gridContainer}>
      {fatalSeries.map((series) => (
        <div
          key={series.seriesNumber}
          className={styles.card}
          onMouseEnter={() => setHoveredCard(series.seriesNumber)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={styles.cardInner}>
            <div className={styles.seriesNumber}>
              {series.seriesNumber === 99 ? "X" : series.seriesNumber}
            </div>
            <div className={styles.seriesName}>{series.name}</div>
            <div
              className={`${styles.solutionButtons} ${
                hoveredCard === series.seriesNumber ? styles.visible : ""
              }`}
            >
              {series.solutions.map((solution, index) => (
                <button
                  key={index}
                  className={`${styles.solutionButton} viewSolutionBtn`}
                  data-image={solution.imageUrl}
                  data-name={`${series.name} - Solution ${index + 1}`}
                >
                  Solution {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FatalGrid;
