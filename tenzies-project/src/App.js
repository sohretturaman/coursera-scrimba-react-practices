/** @format */

import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid"; //to crate unique ids
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
const App = () => {
  const [tenzies, setTenzies] = useState(false);
  const { width, height } = useWindowSize();
  function genereateNewDice() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isheld: false,
    };
  }
  const allNewDice = () => {
    const randomNumsList = [];
    for (let i = 0; i < 10; i++) {
      randomNumsList.push(genereateNewDice());
    }

    return randomNumsList;
  };

  const [dies, setDies] = useState(allNewDice());

  useEffect(() => {
    const isWin = () => {
      //every returns true or false and comapares all items
      const result = dies.every((tenzie) => tenzie.isheld === true); //comapres all items in array
      const firstItem = dies[0].value;
      const allSame = dies.every((die) => die.value === firstItem);

      if (result && allSame) {
        setTenzies(true);
        console.log("tenzies  turned out true");
      }
    };
    isWin();
  }, [dies]);

  const rollDice = () => {
    /* setDies(allNewDice()); */
    if (tenzies) {
      setTenzies(false);
      setDies(allNewDice());
    } else {
      setDies((oldDies) =>
        oldDies.map((die) => {
          return die.isheld === true ? die : genereateNewDice();
        })
      );
    }
  };

  const holdDice = (id) => {
    setDies((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isheld: !die.isheld } : die;
      })
    );
    console.log(
      "dies new",
      dies.map((x) => x.isheld)
    );
  };

  const diesMap = dies.map((number) => (
    <Die key={number.id} {...number} holdDice={holdDice} />
  ));

  return (
    <main>
      {tenzies && <Confetti width={width} height={height} />}
      <div>
        <h1 className="header">Tenzies</h1>
        <p style={{ width: "90%", fontWeight: 500 }}>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dieGrid">{diesMap}</div>
      <div>
        <button className="button" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll Dice"}
        </button>
      </div>
    </main>
  );
};

export default App;
