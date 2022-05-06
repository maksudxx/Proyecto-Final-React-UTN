import {combineReducers} from 'redux'
import videogameReducer from './videogameReducer';
import genreReducer from './genreReducer';


const reducer = combineReducers({
    videogame: videogameReducer,
    genre: genreReducer,
})

export default reducer;