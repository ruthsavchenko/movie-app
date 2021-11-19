import { FETCH_MOVIES, FETCH_MOVIES_ERROR, FETCH_SESSIONS, FETCH_SESSIONS_ERROR } from "../types/constants";

const initialState = {
    movies: [],
    sessions: [],
    error: '',
    isLoading: true,
}


export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES: {
            return {
                ...state,
                movies: action.payload.movies,
                isLoading: false
            }
        }
        case FETCH_MOVIES_ERROR: {
            return {
                ...state,
                error: action.msg
            }
        }
        case FETCH_SESSIONS: {
            return {
                ...state,
                sessions: action.payload.sessions,
                isLoading: false
            }
        }
        case FETCH_SESSIONS_ERROR: {
            return {
                ...state,
                error: action.msg
            }
        }
        default: {
            return state
        }
    }
}