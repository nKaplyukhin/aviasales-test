import React from "react"
import './Navbar.css';

let Navbar = (props) => {
  let addFilter = (filter) => {
    if (filter.all)
      filter = {
        ...filter,
        noneTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false
      }
    else {
      filter = {
        ...filter, all: false
      }
    }
    props.changeFilter(filter)
  }
  
  return (
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
              <input type="checkbox" checked={props.filter.all}
                onChange={() => { addFilter({ all: true }) }} />
              <div className="navbar-filter__text">Все</div>
            </label>
          </li>
          <li className="navbar-filter__list__item">
            <label className="navbar-filter__check">
              <input type="checkbox" checked={props.filter.noneTransfer}
                onChange={() => { addFilter({ noneTransfer: !props.filter.noneTransfer }) }} />
              <div className="navbar-filter__text">Без пересадок</div>
            </label>
          </li>
          <li className="navbar-filter__list__item">
            <label className="navbar-filter__check">
              <input type="checkbox" checked={props.filter.oneTransfer}
                onChange={() => { addFilter({ oneTransfer: !props.filter.oneTransfer }) }} />
              <div className="navbar-filter__text">1 пересадка</div>
            </label>
          </li>
          <li className="navbar-filter__list__item">
            <label className="navbar-filter__check">
              <input type="checkbox" checked={props.filter.twoTransfer}
                onChange={() => { addFilter({ twoTransfer: !props.filter.twoTransfer }) }} />
              <div className="navbar-filter__text">2 пересадки</div>
            </label>
          </li>
          <li className="navbar-filter__list__item">
            <label className="navbar-filter__check">
              <input type="checkbox" checked={props.filter.threeTransfer}
                onChange={() => { addFilter({ threeTransfer: !props.filter.threeTransfer }) }} />
              <div className="navbar-filter__text">3 пересадки</div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar