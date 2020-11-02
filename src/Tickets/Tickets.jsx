import React from "react"
import "./Tickets.css"

let Tickets = (props) => {
    if (!props.isLoaded)
        props.getTickets(props.searchId)

    let sortTickets = [...props.tickets].sort((a, b) => {
        if (props.sorting === "cheap") return a.price - b.price
        if (props.sorting === "quick")
            return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)

    })
    let changeSorting = (sorting) => {
        props.changeSorting(sorting)
    }

    let ticketElements = sortTickets.map((ticket, i) => {
        return <Ticket key={i} {...ticket} />
    })
    return (
        props.isLoaded
            ? <div className="main-content">
                <div className="main-content__header">
                    <div className={`main-content__item 
                        ${props.sorting === "cheap" && "main-content__item_active"}`}
                        onClick={() => { changeSorting("cheap") }}>
                        <div className="main-content__item__text">Самый дешевый</div>
                    </div>
                    <div className={`main-content__item
                        ${props.sorting === "quick" && "main-content__item_active"}`}
                        onClick={() => { changeSorting("quick") }}>
                        <div className="main-content__item__text">Самый быстрый</div>
                    </div>
                </div>
                {ticketElements}
            </div>
            : <div></div>
    )
}

let Ticket = (props) => {
      return (
        <div className="ticket">
            <div className="ticket__header">
                <div className="ticket__price">
                    {props.price} Р
                </div>
                <div className="ticket__logo">
                    <img src={`//pics.avs.io/99/36/${props.carrier}.png`} />
                </div>
            </div>
            <div className="route-block">
                <RouteInfo {...props.segments[0]}/>
                <RouteInfo {...props.segments[1]}/>
            </div>
        </div>
    )
}

let RouteInfo = (props) => {

    let dateOpen = new Date(props.date)
    let dateClose = new Date(dateOpen.getTime() + (props.duration*1000*60))

    let convertDate = (date) => {
        return `${date.getHours()}:${date.getMinutes()}`
    }

    let convertTime = (min) => {
        return `${Math.floor(min / 60)} ч ${min % 60} мин`
    }
    
    return (
        <div className="route">
            <div className="route__item">
                <div className="route__title">
                    {props.origin} – {props.destination}
                </div>
                <div className="route__text">
                    {convertDate(dateOpen)} - {convertDate(dateClose)}
                </div>
            </div>

            <div className="route__item">
                <div className="route__title">
                    В пути
                </div>
                <div className="route__text">
                    {convertTime(props.duration)}
                </div>
            </div>

            <div className="route__item">
                <div className="route__title">
                    2 пересадки
                </div>
                <div className="ticket__way__text">
                    {props.stops.join(', ')}
                </div>
            </div>
        </div>
    )
}

export default Tickets