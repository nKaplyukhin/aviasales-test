import React from "react"
import { connect } from 'react-redux';
import './App.css';
import Tickets from './Tickets/Tickets';
import { getSearchId, getTickets, changeSorting, changeFilter } from "./redux/reduxStore";
import { getTicketsSelector, getFilter, getTicketsFilter } from "./redux/ticketsSelector"
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.searchId)
      this.props.getSearchId()
  }
  render() {
    if (!this.props.searchId) return <div></div>
    return (
      <div className="App">
        <Header />
        <div className="main">

          <Navbar filter={this.props.filter}
            changeFilter={this.props.changeFilter}/>

          <Tickets tickets={this.props.tickets}
            searchId={this.props.searchId}
            isLoaded={this.props.isLoaded}
            getTickets={this.props.getTickets} 
            changeSorting={this.props.changeSorting}
            sorting={this.props.sorting}/>
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
    isLoaded: state.isLoaded,
    sorting: state.sorting
  }
}

export default connect(mapStateToProps, { getSearchId, getTickets, changeSorting, changeFilter })(App);
