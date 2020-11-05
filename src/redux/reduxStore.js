import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ticketsAxios } from "../axios/axios";

const SET_TICKETS = "SET_TICKETS";
const SET_SEARCH_ID = "SET_SEARCH_ID";
const INITIAL_SUCCESS = "INITIAL_SUCCESS";
const CHANGE_SORTING = "CHANGE_SORTING";
const CHANGE_FILTER = "CHANGE_FILTER";

let initState = {
    tickets: [],
    searchId: null,
    initialSuccess: false,
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
        case INITIAL_SUCCESS:
            return {
                ...state,
                initialSuccess: true
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
const initialSuccess = () => ({ type: INITIAL_SUCCESS });
export const changeSorting = (sorting) => ({ type: CHANGE_SORTING, sorting });
export const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter });

export const getTickets = searchId => async dispatch => {
    let response = await ticketsAxios.getTickets(searchId);
    if (response.status === 200) {
        dispatch(initialSuccess());
        dispatch(setTickets(response.data.tickets));
    }
    else alert("ОШИБКА!!! Перезагрузите страницу")
}
export const getSearchId = () => async dispatch => {
    let data = await ticketsAxios.getSearchId();
    dispatch(setSearchId(data.searchId));
}

export default createStore(reducer, applyMiddleware(thunk))