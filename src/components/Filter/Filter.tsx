import React, {useEffect, useState} from 'react';
import style from "./Filter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setFilterAC} from "../../redux/filter-reducer";

export default function Filter() {

    const dispatch = useDispatch()

    const cards = useSelector((state: any) => state.cardsList)
    const categories = cards.reduce((acc: Array<string>,card: any)=> {
            if (!acc.includes(card.category)) {
                return acc = [...acc, card.category]
            }
            return acc;
        }, [])

    categories.unshift('Все категории')

    console.log(categories)

    function onCatClickHandler(cat: string) {
        dispatch(setFilterAC(cat))
    }

    return <>
        <div className={style.filter}>
            {/*// {renderCards}*/}
            {
                categories.map((cat: string) => {
                    // return <div >cat</div>
                    return <div key={cat} onClick={()=>onCatClickHandler(cat)}>{cat}</div>
                })
            }
        </div>
    </>
}