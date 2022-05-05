import {combineReducers} from 'redux'
import videogameReducer from './videogameReducer';


const reducer = combineReducers({
    videogame: videogameReducer
})

export default reducer;