import {combineReducers} from 'redux'
import videogameReducer from './videogameReducer';
import genreReducer from './genreReducer';
import platformReducer from './platformReducer';



const reducer = combineReducers({
    videogame: videogameReducer,
    genre: genreReducer,
    platform: platformReducer,
    
})

export default reducer;