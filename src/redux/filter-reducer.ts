
export type InitialStateType = {
    filter: string
}

const initialState: InitialStateType = {
    filter: 'Все категории',
}

type ActionTypes =
    | ReturnType<typeof setFilterAC>

export const filterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case SET_APP_FILTER:
            return {
                ...state,
                filter: action.filter
            }

        default:
            return state
    }
}
const SET_APP_FILTER = 'SET_APP_FILTER'

export type SetAppStatusActionType = ReturnType<typeof setFilterAC>

export const setFilterAC = (filter: string) => ({
        type: SET_APP_FILTER,
        filter
    }
)