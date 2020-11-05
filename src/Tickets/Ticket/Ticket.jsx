import React from "react"
import "./Ticket.css"

let Ticket = (props) => {
    return (
        <div className="ticket">
            <div className="ticket__header">
                <div className="ticket__price">
                    {props.price} Р
                </div>
                <div className="ticket__logo">
                    <img src={`//pics.avs.io/99/36/${props.carrier}.png`}
                        alt="Логотип компании" />
                </div>
            </div>
            <div className="route-block">
                <RouteInfo {...props.segments[0]} />
                <RouteInfo {...props.segments[1]} />
            </div>
        </div>
    )
}

let RouteInfo = (props) => {

    let dateOpen = new Date(props.date)
    let dateClose = new Date(dateOpen.getTime() + (props.duration * 1000 * 60))

    let convertDate = (date) => {
        return `${date.getHours()}:${date.getMinutes()}`
    }

    let convertTime = (min) => {
        return `${Math.floor(min / 60)} ч ${min % 60} мин`
    }

    let transfer = (stops) => {
        switch (stops.length) {
            case 0: return "без пересадок"
            case 1: return "1 пересадка"
            case 2: return "2 пересадки"
            case 3: return "3 пересадки"
            default:
                break;
        }
    }
    return (
        <div className="route">
            <RouteItem title={props.origin + " – " + props.destination} 
                text={convertDate(dateOpen) + " – " + convertDate(dateClose)}/>
            <RouteItem title="В пути"
                text={convertTime(props.duration)}/>
            <RouteItem title={transfer(props.stops)}
                text={props.stops.join(', ')}/>
        </div>
    )
}

let RouteItem = ({title, text}) => {
    return (
        <div className="route__item">
            <div className="route__title">
                {title}
            </div>
            <div className="route__text">
                {text}
            </div>
        </div>
    )
}

export default Ticket;