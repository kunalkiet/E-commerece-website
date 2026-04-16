import { Children, useState } from "react";
import {ThemeContext,UserContext,LangContext} from './context';
function reducer(state,action){
    switch(action.type){
        case "TOGGLR_THEME":
            return{
                ...state,
                theme:state.theme==="light"?"dark":"Light"
            }

    case "SET_USER":
        return{
            ...state,

        }
default:
    return{
        state,
    }
        

    }
    const Approvider=({Children})=>{
        //reducer decide how chnage are chnanges where action tells what to do
    }
}