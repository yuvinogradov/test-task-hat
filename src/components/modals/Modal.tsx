import React, {CSSProperties, ReactChild, ReactChildren, ReactElement, useEffect} from 'react';
import s from './Modal.module.css'
import {useSelector} from "react-redux";
import emptyImage from '../../assets/empty.png'
import style from "../Card/Card.module.css";


export type ModalPropsType = {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;
    close?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;

    show: boolean
    productId?: string

    children?: ReactChild | ReactChildren | ReactElement | (string | ReactChildren | ReactElement)[];


}


function Modal(props: ModalPropsType) {
    const {
        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {
        },

        width,
        height,
        modalStyle,
        modalOnClick = () => {
        },

        show, productId, children
    } = props

    // disable page scroll on modal show
    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [show]);

    const cards = useSelector((state: any) => state.cardsList)
    const card = cards.find((card: any) => {
        return card.id === productId
    })
    //debugger


    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!show) return null

    return (
        <>
            {enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    overflowY: 'hidden',

                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,

                    ...backgroundStyle,
                }}
                onClick={backgroundOnClick}
            />}

            <div
                style={{
                    position: 'fixed',
                    top,
                    left,
                    width,
                    height,
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',

                    background: 'white',
                    zIndex: 21,

                    ...modalStyle,
                }}
                onClick={modalOnClick}
            >
                <div className={s.closeButtonContainer}>
                    <div className={s.closeButton} onClick={props.close}>X</div>
                </div>
                {children}

                <div className={s.image}><img src={emptyImage} width="140px" height=""/></div>
                <div className={s.text}>
                    <div className={s.name}>{card.name}</div>
                    <div className={s.category}>Категория: {card.category}</div>
                    <div className={s.description}>{card.description}</div>
                    <div className={s.price}>Цена: {card.price} шек/{card.measure}</div>
                    <div className={s.date}>Акция до {card.dueDate}</div>
                </div>
            </div>
        </>
    );
}

export default Modal;