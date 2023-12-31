export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'



export const addToFavouriteAction = (songSelected) => {
    return{
        type: ADD_TO_FAVOURITE,
        playload: {songSelected}
    }
}

export const removeFromFavouriteAction = (songSelected) => {
    return{
        type: removeFromFavouriteAction,
        playload: {songSelected}
    }
} 