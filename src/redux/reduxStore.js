import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ticketsAxios } from "../axios/axios";

const SET_TICKETS = "SET_TICKETS";
const SET_SEARCH_ID = "SET_SEARCH_ID";
const SET_IS_LOADING = "SET_IS_LOADING"

let initState = {
    tickets: [],
    searchId: null,
    isLoading: false,
    stop:false
};

let reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SEARCH_ID:
            return {
                ...state,
                searchId: action.searchId
            }
        case SET_TICKETS:
            return {
                ...state,
                tickets: action.data,
                stop: true
            }
        case SET_IS_LOADING:
            return {
                ...state,
                ifLoading: action.isLoading
            }
        default:
            return state
    }
}

export const setTickets = (data) => ({ type: SET_TICKETS, data });
export const setSearchId = (searchId) => ({ type: SET_SEARCH_ID, searchId });
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})

export const getTickets = (searchId) => (dispatch) => {
    dispatch(setIsLoading(true))
    ticketsAxios.getTickets(searchId)
        .then(data => {
            dispatch(setTickets(data.tickets))
            dispatch(setIsLoading(false))
        })
}

export const getSearchId = () => (dispatch) => {
        return ticketsAxios.getSearchId()
        .then(data => {
                dispatch(setSearchId(data.searchId));
        })
}

export default createStore(reducer, applyMiddleware(thunk))