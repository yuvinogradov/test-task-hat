import React from 'react';
import style from './Card.module.css'
import emptyImage from '../../assets/empty.png'

export default function Card(props: any) {
    let {name, id} = props
    return <div className={style.card}>
        <div className={style.image}><img src={emptyImage} width="140px" height=""/></div>
        <div className={style.name}>{props.name}</div>
        <div className={style.price}>Цена: {props.price} шек/{props.measure}</div>
        <div className={style.date}>До {props.dueDate}</div>
        </div>
        }