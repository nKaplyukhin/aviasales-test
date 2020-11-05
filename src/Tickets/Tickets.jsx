import React from "react"
import Ticket from "./Ticket/Ticket"
import "./Tickets.css"

let Tickets = ({tickets, sorting, changeSorting, initialSuccess}) => {
    
    let sortTickets = [...tickets].sort((a, b) => {
        if (sorting === "cheap") return a.price - b.price
        else if (sorting === "quick")
            return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        else return ""
        })
    let ticketElements = sortTickets.map((ticket, i) => {
        return <Ticket key={i} {...ticket} />
    })
    return (
        <div className="main-content">
            <div className="main-content__header">
                <div className={`main-content__item 
                        ${sorting === "cheap" && "main-content__item_active"}`}
                    onClick={() => {changeSorting("cheap") }}>
                    <div className="main-content__item__text">Самый дешевый</div>
                </div>
                <div className={`main-content__item
                        ${sorting === "quick" && "main-content__item_active"}`}
                    onClick={() => {changeSorting("quick") }}>
                    <div className="main-content__item__text">Самый быстрый</div>
                </div>
            </div>
            {initialSuccess && ticketElements}
        </div>
    )
}

export default Tickets