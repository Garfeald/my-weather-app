import {AddCardProps, CardPropsStore, ICardProps} from "../types";


export const getCardPropsState = (): CardPropsStore => ({
    cardProps: null
})

export const cordPropsReducer = (
    state: CardPropsStore = getCardPropsState(),
    action: AddCardProps): CardPropsStore => {
    switch (action.type) {
        case "ADD_CARD_PROPS": {
            return {
                ...state,
                cardProps: action.payload
            }
        }
        default:
            return state
    }
}
