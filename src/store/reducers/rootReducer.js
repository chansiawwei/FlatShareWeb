import authReducer from "./authReducer"
import billReducer from './billReducer'
import todoReducer from './todoReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer= combineReducers({
    auth:authReducer,
    bill:billReducer,
    todo:todoReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer