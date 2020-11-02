import { createSelector } from "reselect"

export const getTicketsSelector = state => { return state.tickets }
export const getFilter = (state) => { return state.filter }

const noneTransferFilter = (ticket, filter) => {
    return filter.noneTransfer 
        && (!ticket.segments[0].stops.length 
            && !ticket.segments[1].stops.length)
}
const oneTransferFilter = (ticket, filter) => {
    return filter.oneTransfer && 
        (ticket.segments[0].stops.length === 1 
            && ticket.segments[1].stops.length === 1)
}
const twoTransferFilter = (ticket, filter) => {
    return filter.twoTransfer && 
        (ticket.segments[0].stops.length === 2 && 
            ticket.segments[0].stops.length === 2)
}
const threeTransferFilter = (ticket, filter) => {
    return filter.threeTransfer && 
        (ticket.segments[0].stops.length === 3 && 
            ticket.segments[0].stops.length === 3)
}

export const getTicketsFilter = createSelector(getTicketsSelector, getFilter, (tickets, filter) => {
    if (filter.all) return tickets;
    else {
        return tickets.filter(ticket => 
            noneTransferFilter(ticket, filter)
            || oneTransferFilter(ticket, filter)
            || twoTransferFilter(ticket, filter)
            || threeTransferFilter(ticket, filter)
        )
    };
})
