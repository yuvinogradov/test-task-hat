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
        //alert('Hello')
        const thunk = fetchCardsTC()
        dispatch(thunk)
    }, [])

    const cards = useSelector((state: any) => state.cardsList)


    //const renderCards = cards.reduce((acc:string, val:any) => {return acc +=`<Card key={${val.id}} name={${val.name}}/>`}, "")

    //debugger

    function onCardClickHandler(id: string) {

    }

    return <>
        <div className={style.cards}>
            {/*// {renderCards}*/}
            {
                cards.map((card: any) => {
                    return <div onClick={() => {
                        // onCardClickHandler(card.id)
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