import React, { useState, useEffect } from "react";
import Header from "./header";
import Card from "./cards";
import styles from "./cardContainer.module.css";

function CardContainer() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemons, setPokemons] = useState([
    { name: "bulbasaur", img: "./images/bulbasaur" },
    { name: "ivysaur", img: "./images/ivysaur" },
    { name: "venusaur", img: "./images/venusaur" },
    { name: "charmander", img: "./images/charmander" },
    { name: "charmeleon", img: "./images/charmeleon" },
    { name: "charizard", img: "./images/charizard" },
    { name: "squirtle", img: "./images/squirtle" },
    { name: "wartortle", img: "./images/wartortle" },
    { name: "blastoise", img: "./images/blastoise" },
    { name: "caterpie", img: "./images/caterpie" },
    { name: "metapod", img: "./images/metapod" },
    { name: "butterfree", img: "./images/butterfree" },
  ]);
  const [clickedPokemonList, setClickedPokemonList] = useState([]);

  function clickCard(e) {
    const targetPokemon = e.target.getAttribute("data-pokemon");
    if (clickedPokemonList.includes(targetPokemon)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedPokemonList([]);
    } else {
      setClickedPokemonList(clickedPokemonList.concat(targetPokemon));
      setScore(score + 1);
    }
  }

  const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    setPokemons(getShuffledArr(pokemons));
  }, [score]);

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <div className={styles.container}>
        <div onClick={clickCard} data-pokemon={pokemons[0].name}>
          <Card pokemon={pokemons[0].name} imageSrc={pokemons[0].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[1].name}>
          <Card pokemon={pokemons[1].name} imageSrc={pokemons[1].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[2].name}>
          <Card pokemon={pokemons[2].name} imageSrc={pokemons[2].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[3].name}>
          <Card pokemon={pokemons[3].name} imageSrc={pokemons[3].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[4].name}>
          <Card pokemon={pokemons[4].name} imageSrc={pokemons[4].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[5].name}>
          <Card pokemon={pokemons[5].name} imageSrc={pokemons[5].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[6].name}>
          <Card pokemon={pokemons[6].name} imageSrc={pokemons[6].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[7].name}>
          <Card pokemon={pokemons[7].name} imageSrc={pokemons[7].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[8].name}>
          <Card pokemon={pokemons[8].name} imageSrc={pokemons[8].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[9].name}>
          <Card pokemon={pokemons[9].name} imageSrc={pokemons[9].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[10].name}>
          <Card pokemon={pokemons[10].name} imageSrc={pokemons[10].img} />
        </div>
        <div onClick={clickCard} data-pokemon={pokemons[11].name}>
          <Card pokemon={pokemons[11].name} imageSrc={pokemons[11].img} />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
