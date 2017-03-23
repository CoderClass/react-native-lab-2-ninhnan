import {combineReducers} from 'redux';

// Defined types, can be based on your scenes that you want they get data each the other.
const types = {
    dataScene1: 'textScene1',
    dataScene2: 'textScene2'
}

// Defined actions
export const actionCreators = {
    storeDataScene1 (params){
        return {
            type: types.dataScene1,
            payload: params,
        }
    }
}

const initialState = {};