import * as constants from "./constants";

export function setWorkDuration(duration) {
    return  {
        type: constants.SET_WORK_DURATION,
        duration
    };
}

export function setBreakDuration(duration) {
    return  {
        type: constants.SET_BREAK_DURATION,
        duration
    };
}

export function saveDefaults(defaults) {
    return {
        type: constants.SAVE_DEFAULTS,
        defaults
    };
}

export function fetchDefaults() {
    return function(dispatch) {
        return fetch("http://localhost:9080/defaults")
            .then(response => {
                return response.json()
                    .then(data => dispatch(saveDefaults(data)));
            });
    }
}