"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>25</span>
          <span className={styles.logoText}>MADFUT</span>
        </a>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <a href="/sbc" className={styles.navLink}>
            SBC
          </a>
          <a href="/coming-soon" className={styles.navLink}>
            FATAL
          </a>
          <a href="/coming-soon" className={styles.navLink}>
            FATAL SIM
          </a>
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>
    </header>
  );
}
