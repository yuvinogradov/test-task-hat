import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import style from "./Cards.module.css"
import {fetchCardsTC} from "../../redux/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../modals/Modal";

export default function Cards() {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState('')

    useEffect(() => {
        const thunk = fetchCardsTC()
        dispatch(thunk)
    }, [])

    let cards = useSelector((state: any) => state.cardsList)
    const filter = useSelector((state: any) => state.filter)



    // let cards2

    if(filter.filter!=='Все категории') {
        cards = cards.filter((card: any) => {
            return card.category === filter.filter
        } )
    }

    return <>
        <div className={style.cards}>
            {/*// {renderCards}*/}
            {
                cards.map((card: any) => {
                    return <div onClick={() => {
                        setShowModal(card.id)
                    }}><Card key={card.id} {...card} /></div>
                })
            }
        </div>

        <Modal
            enableBackground={true}
            backgroundOnClick={() => setShowModal('')}
            close={() => setShowModal('')}
            width={600}
            height={400}
            show={showModal !== ''}
            productId={showModal}
        >
        </Modal>
    </>
}