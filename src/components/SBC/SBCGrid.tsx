import React, { useState, useMemo } from "react";
import sbcGroups from "../../data/sbc-data";
import styles from "./SBCGrid.module.css";
import { ChevronDown } from "lucide-react";

type SortOption = "a-z" | "z-a" | "newest" | "oldest";

const SBCGrid: React.FC = () => {
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  const sortedSBCs = useMemo(() => {
    return [...sbcGroups].sort((a, b) => {
      switch (sortOption) {
        case "a-z":
          return a.name.localeCompare(b.name);
        case "z-a":
          return b.name.localeCompare(a.name);
        case "newest":
          return b.order - a.order;
        case "oldest":
          return a.order - b.order;
        default:
          return 0;
      }
    });
  }, [sortOption]);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <div className={styles.selectWrapper}>
          <select
            id="sort-select"
            className={styles.sortSelect}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
          <ChevronDown className={styles.selectIcon} />
        </div>
      </div>
      <div className={styles.grid}>
        {sortedSBCs.map((sbc) => (
          <a
            key={sbc.name}
            href={`/sbc/${sbc.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={styles.sbcItem}
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
              <h2 className={styles.sbcName}>{sbc.name}</h2>
              <p className={styles.sbcCount}>{sbc.templatesCount} templates</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SBCGrid;
