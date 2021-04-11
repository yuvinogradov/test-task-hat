import {Dispatch} from 'redux'
import {API} from "../api/API";
import {setAppStatusAC, SetAppStatusActionType} from "./app-reducer";

const SET_CARDS_LIST = 'SET_CARDS_LIST'

const initialState: Array<any> = []
type CardType = any;

export const cardsListReducer = (state: Array<CardsDomainType> = initialState, action: any): Array<any> => {
    // debugger
    switch (action.type) {
        case SET_CARDS_LIST:
            return action.cardsList;
        default:
            return state
    }
}

export const setCardsListAC = (cardsList: Array<CardType>) => ({type: SET_CARDS_LIST, cardsList} as const)

export type SetCardsListActionType = {
    type: string
    cardsList: Array<any>
};

type ActionsType =
    | SetCardsListActionType
    | SetAppStatusActionType


// thunk
export const fetchCardsTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setAppStatusAC('loading'))
        API.getCards({})
            .then((res) => {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setCardsListAC(res))
            })
    }
}

export type FilterValuesType = 'all' | 'active' | 'completed';
export type CardsDomainType = CardType & {
    filter: FilterValuesType
}
