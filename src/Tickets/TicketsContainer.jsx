import React from "react"
import Tickets from "./Tickets"
import "./Tickets.css"

class TicketsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.initialSuccess) this.props.getTickets(this.props.searchId)
    }
    changeSorting = (sorting) => {
        this.props.changeSorting(sorting)
    }
    render() {
        return (
            <Tickets tickets={this.props.tickets}
                sorting={this.props.sorting}
                changeSorting={this.changeSorting} 
                initialSuccess={this.props.initialSuccess}/>
        )
    }
}

export default TicketsContainer;