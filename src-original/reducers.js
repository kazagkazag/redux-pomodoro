import * as constants from "./constants";
import {combineReducers} from "redux";

export function workDuration(state = 1, action) {
    switch (action.type) {
        case constants.SET_WORK_DURATION:
            return action.duration;
        case constants.SAVE_DEFAULTS:
            return action.defaults.workDuration;
        default:
            return state;
    }
}

export function breakDuration(state = 1, action) {
    switch (action.type) {
        case constants.SET_BREAK_DURATION:
            return action.duration;
        case constants.SAVE_DEFAULTS:
            return action.defaults.breakDuration;
        default:
            return state;
    }
}

export default combineReducers({
    workDuration,
    breakDuration
});