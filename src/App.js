import React from "react"
import { connect } from 'react-redux';
import './App.css';
import Tickets from './Tickets/Tickets';
import { getSearchId, getTickets } from "./redux/reduxStore"

class App extends React.Component {
  componentDidMount() {
    if (!this.props.searchId)
      this.props.getSearchId()
  }
  render() {
    if (!this.props.searchId) return <div></div>
    return (
      <div className="App">
        <div className="header">
          <div className="header__logo"></div>
        </div>
        <div className="main">
          <div className="navbar">
            <div className="navbar__header">
              <div className="navbar__title">
                Количество пересадок
            </div>
            </div>
            <div className="navbar-filter">
              <ul className="navbar-filter__list">
                <li className="navbar-filter__list__item">
                  <label className="navbar-filter__check">
                    <input type="checkbox" />
                    <div className="navbar-filter__text">Все</div>
                  </label>
                </li>
                <li className="navbar-filter__list__item">
                  <label className="navbar-filter__check">
                    <input type="checkbox" />
                    <div className="navbar-filter__text">Без пересадок</div>
                  </label>
                </li>
                <li className="navbar-filter__list__item">
                  <label className="navbar-filter__check">
                    <input type="checkbox" />
                    <div className="navbar-filter__text">1 пересадка</div>
                  </label>
                </li>
                <li className="navbar-filter__list__item">
                  <label className="navbar-filter__check">
                    <input type="checkbox" />
                    <div className="navbar-filter__text">2 пересадки</div>
                  </label>
                </li>
                <li className="navbar-filter__list__item">
                  <label className="navbar-filter__check">
                    <input type="checkbox" />
                    <div className="navbar-filter__text">3 пересадки</div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <Tickets tickets={this.props.tickets}
            searchId={this.props.searchId}
            isLoading={this.props.isLoading}
            getTickets={this.props.getTickets} 
            stop={this.props.stop}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    searchId: state.searchId,
    tickets: state.tickets,
    isLoading: state.isLoading,
    stop: state.stop
  }
}

export default connect(mapStateToProps, { getSearchId, getTickets })(App);
