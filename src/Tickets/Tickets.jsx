import React from "react"
import "./Tickets.css"

let Tickets = (props) => {
    if (!props.stop)
        props.getTickets(props.searchId)
    if (!props.stop) return <div></div>

    let ticketElements = props.tickets.map(ticket => {
        return <Ticket {...ticket} />
    })
    return (
        <div className="main-content">
            <div className="main-content__header">
                <div className="main-content__item main-content__item_active">
                    <div className="main-content__item__text">Самый дешевый</div>
                </div>
                <div className="main-content__item">
                    <div className="main-content__item__text">Самый быстрый</div>
                </div>
            </div>
            {ticketElements}
        </div>
    )
}

let Ticket = (props) => {
    let convertTime = (min) => {
        return `${Math.floor(min/60)} ч ${min%60} мин`
    }

    return (
        <div className="ticket">
            <div className="ticket__header">
                <div className="ticket__price">
                    {props.price} р
        </div>
                <div className="ticket__logo">
                    <img src={`//pics.avs.io/99/36/${props.carrier}.png`} />
                </div>
            </div>
            <div className="route-block">
                <div className="route route__out">
                    <div className="route__item">
                        <div className="route__title">
                            {props.segments[0].origin} – {props.segments[0].destination}
                        </div>
                        <div className="route__text">
                            10:45 – 08:00
                        </div>
                    </div>
                    <div className="route__item">
                        <div className="route__title">
                            В пути
                        </div>
                        <div className="route__text">
                            {convertTime(props.segments[0].duration)}
                        </div>
                    </div>

                    <div className="route__item">
                        <div className="route__title">
                            2 пересадки
                        </div>
                        <div className="ticket__way__text">
                            {props.segments[0].stops}
                        </div>
                    </div>
                </div>
                <div className="route  route__open">
                    <div className="route__item">
                        <div className="route__title">
                            MOW – HKT
                </div>
                        <div className="route__text">
                            10:45 – 08:00
                </div>
                    </div>

                    <div className="route__item">
                        <div className="route__title">
                            В пути
                </div>
                        <div className="route__text">
                            21ч 15м
                </div>
                    </div>
                    <div className="route__item">
                        <div className="route__title">
                            2 пересадки
                </div>
                        <div className="ticket__way__text">
                            HKG, JNB
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tickets