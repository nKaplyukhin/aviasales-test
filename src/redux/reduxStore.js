import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ticketsAxios } from "../axios/axios";

const SET_TICKETS = "SET_TICKETS";
const SET_SEARCH_ID = "SET_SEARCH_ID";
const SET_IS_LOADED = "SET_IS_LOADED";
const CHANGE_SORTING = "CHANGE_SORTING";
const CHANGE_FILTER = "CHANGE_FILTER";

let initState = {
    tickets: [],
    searchId: null,
    isLoaded: false,
    filter: {
        all: true,
        noneTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false
    },
    sorting: "cheap"
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
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: true
            }
        case CHANGE_SORTING:
            return {
                ...state,
                sorting: action.sorting
            }
        case CHANGE_FILTER:
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        ...action.filter
                    }
                }
        default:
            return state
    }
}

const setTickets = (data) => ({ type: SET_TICKETS, data });
const setSearchId = (searchId) => ({ type: SET_SEARCH_ID, searchId });
const setIsLoaded = () => ({type: SET_IS_LOADED});
export const changeSorting = (sorting) => ({type: CHANGE_SORTING, sorting});
export const changeFilter = (filter) => ({type: CHANGE_FILTER, filter})

export const getTickets = (searchId) => (dispatch) => {
    ticketsAxios.getTickets(searchId)
        .then(data => {
            dispatch(setTickets(data.tickets))
            dispatch(setIsLoaded())
        })
}

export const getSearchId = () => (dispatch) => {
        return ticketsAxios.getSearchId()
        .then(data => {
                dispatch(setSearchId(data.searchId));
        })
}

export default createStore(reducer, applyMiddleware(thunk))