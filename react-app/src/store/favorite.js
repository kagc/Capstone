
const LOAD_FAVORITES = 'favorites/loadFavorites'
const USER_FAVORITES = 'favorites/userFavorite'
const CREATE_FAVORITE = 'favorites/createFavorite'
const DELETE_FAVORITE = 'favorites/deleteFavorite'

const loadFavorites = (favorites) => ({
    type: LOAD_FAVORITES,
    favorites
})

const userFavorites = (favorites) => ({
    type: USER_FAVORITES,
    favorites
})

const addFavorite = (favorite) => ({
    type: CREATE_FAVORITE,
    favorite
})

const annihilateFavorite = (favorite) => ({
    type: DELETE_FAVORITE,
    favorite
}) 

export const getAllFavorites = (projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}/favorites`);

    if (response.ok){
        const favorites = await response.json()
        dispatch(loadFavorites(favorites))
        return favorites
    }
    if (response.status >= 400){
        throw response
    }
}

export const getUserFavorites = () => async dispatch => {
    const response = await fetch(`/api/favorites/current`);

    if (response.ok){
        const favorites = await response.json()
        dispatch(userFavorites(favorites))
        return favorites
    }
    if (response.status >= 400){
        throw response
    }
}

export const makeFavorite = (newFavorite, projectId) => async dispatch => {
    const response = await fetch(`/api/projects/${projectId}/favorites`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFavorite)
    })
    if (response.ok){
        const favorite = await response.json()
        dispatch(addFavorite(favorite))
        return favorite
    }
    if (response.status >= 400){
        throw response
    }
}

export const removeFavorite = (favoriteId) => async dispatch => {
    const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        const deletedFavorite = await response.json()
        dispatch(annihilateFavorite(deletedFavorite))
        return deletedFavorite
    }
    if (response.status >= 400){
        throw response
    }
}

// const initialState = { allFavorites: {}, userFavorites: {}, userFavoritesArray:[] }
const initialState = { allFavorites: {}, userFavorites: {} }

const favoriteReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_FAVORITES:
            newState = { ...state, allFavorites: {} }
            action.favorites.Favorites.forEach(favorite => {
                newState.allFavorites[favorite.id] = favorite
            })
            newState.allFavorites.total = action.favorites.Favorites.length
            return newState

        case USER_FAVORITES:
            newState =  { ...state, userFavorites: {} }
            // newState =  { ...state, userFavorites: {}, userFavoritesArray: [] }
            action.favorites.Favorites.forEach(favorite => {
                newState.userFavorites[favorite.id] = favorite
                newState.userFavorites[favorite.id].title = favorite.project.title
            })
            // newState.userFavoritesArray = Object.values(newState.userFavorites)
            newState.userFavorites.total = action.favorites.Favorites.length
            return newState

        case CREATE_FAVORITE:
            newState = { ...state, allFavorites: { ...state.allFavorites }, userFavorites: { ...state.userFavorites } }
            // newState = { ...state, allFavorites: { ...state.allFavorites }, userFavorites: { ...state.userFavorites }, userFavoritesArray: [] }
            newState.allFavorites[action.favorite.id] = action.favorite
            newState.userFavorites[action.favorite.id] = action.favorite
            // newState.userFavoritesArray = Object.values(newState.userFavorites)
            // console.log("THIS IS THE ARRAY NOW", newState.userFavoritesArray)
            newState.allFavorites.total += 1
            newState.userFavorites.total += 1
            return newState

        case DELETE_FAVORITE:
            newState = { ...state, allFavorites: { ...state.allFavorites }, userFavorites: { ...state.userFavorites } }
            // newState = { ...state, allFavorites: { ...state.allFavorites }, userFavorites: { ...state.userFavorites }, userFavoritesArray: [] }
            delete newState.allFavorites[action.favorite.id]
            delete newState.userFavorites[action.favorite.id]
            // delete newState.userFavoritesArray.filter(fav => fav.id === action.favorite.id)
            // newState.userFavoritesArray = Object.values(newState.userFavorites)
            newState.allFavorites.total -= 1
            newState.userFavorites.total -= 1
            return newState

        default:
            return state
    }
}

export default favoriteReducer