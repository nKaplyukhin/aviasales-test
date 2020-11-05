import React from "react"
import { connect } from 'react-redux';
import './App.css';
import { getSearchId, getTickets, changeSorting, changeFilter } from "./redux/reduxStore";
import { getFilter, getTicketsFilter } from "./redux/ticketsSelector"
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import TicketsContainer from "./Tickets/TicketsContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.getSearchId()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Navbar filter={this.props.filter}
            changeFilter={this.props.changeFilter} />
          {this.props.searchId
            && <TicketsContainer tickets={this.props.tickets}
              searchId={this.props.searchId}
              getTickets={this.props.getTickets}
              changeSorting={this.props.changeSorting}
              sorting={this.props.sorting}
              initialSuccess={this.props.initialSuccess} />}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tickets: getTicketsFilter(state),
    filter: getFilter(state),
    searchId: state.searchId,
    initialSuccess: state.initialSuccess,
    sorting: state.sorting
  }
}

export default connect(mapStateToProps, { getSearchId, getTickets, changeSorting, changeFilter })(App);
