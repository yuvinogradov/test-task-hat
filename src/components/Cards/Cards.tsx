import React from 'react';
import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards() {

    const cards = []
    for (let i = 0; i < 10; i++) {
        cards.push(<Card id={i}/>)
    }


    // debugger


    return <div className={style.cards}>
        {cards}
    </div>
}