import React, { useState } from "react";
import styles from "./header.module.css";

function Header(props) {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.siteTitle}>
        Memory Game
      </a>
      <ul>
        <li>Score: {props.score}</li>
        <li>High Score: {props.highScore}</li>
      </ul>
    </nav>
  );
}

export default Header;
