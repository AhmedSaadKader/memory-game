import React, { useState } from "react";
import styles from "./card.module.css";

function Card(props) {
  return (
    <div className={styles.card} data-pokemon={props.pokemon}>
      <img src={require(props.imageSrc)} alt={props.pokemon} data-pokemon={props.pokemon} />
      <h1 className={styles.cardTitle} data-pokemon={props.pokemon}>
        {props.pokemon}
      </h1>
    </div>
  );
}

export default Card;
