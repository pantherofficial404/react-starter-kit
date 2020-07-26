import { store } from '../store';
export const STATE_SESSION_KEY = 'app_state_local';
let sessionState = null;

// We will write state to local storage on window reload.
window.addEventListener('unload', () => {
    syncStateToSessionStorage(store.getState());
});
// writing some redux state data to local storage.
export const syncStateToSessionStorage = (state) => {
    const sessionStorage = {
        root: {
            ...state.root,
        },
    }
    window.sessionStorage.setItem(STATE_SESSION_KEY, JSON.stringify(sessionStorage));
}

const getSessionStorageStorage = window.sessionStorage.getItem(STATE_SESSION_KEY);


// Getting local state from local storage
export const getStateFromSessionStorage = () => {
    if (sessionState) {
        return sessionState;
    }
    try {
        sessionState = JSON.parse(getSessionStorageStorage);
        return sessionState;
    } catch (err) {
        console.error('error while parsing session storage', err);
        return undefined;
    }
};

export const getRootState = (initialState) => {
    const state = getStateFromSessionStorage();
    if (state) {
        return {
            ...initialState,
            ...state.root,
        }
    }
    return initialState;
}