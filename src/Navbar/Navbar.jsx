import React from "react"
import './Navbar.css';

let Navbar = ({filter, changeFilter}) => {

  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__title">
          Количество пересадок
            </div>
      </div>

      <div className="navbar-filter">
        <ul className="navbar-filter__list">

          <ListItem filter={filter.all}
            changeFilter={changeFilter}
            text="Все" 
            filterData={ {all: true} }/>

          <ListItem filter={filter.noneTransfer}
            changeFilter={changeFilter}
            text="Без пересадок"
            filterData={ {noneTransfer: !filter.noneTransfer} }/>

          <ListItem filter={filter.oneTransfer}
            changeFilter={changeFilter}
            text="1 пересадка" 
            filterData={ {oneTransfer: !filter.oneTransfer} }/>

          <ListItem filter={filter.twoTransfer}
            changeFilter={changeFilter}
            text="2 пересадки" 
            filterData={ {twoTransfer: !filter.twoTransfer} }/>

          <ListItem filter={filter.threeTransfer}
            changeFilter={changeFilter}
            text="3 пересадки" 
            filterData={ {threeTransfer: !filter.threeTransfer} }/>

        </ul>
      </div>
    </div>
  )
}

let ListItem = ({ filter, changeFilter, text, filterData }) => {

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
    changeFilter(filter)
  }
  
  return (
    <li className="navbar-filter__list__item">
      <label className="navbar-filter__check">
        <input type="checkbox" checked={filter}
          onChange={() => { addFilter(filterData) }} />
        <div className="navbar-filter__check-button"/>
        <div className="navbar-filter__text">{text}</div>
      </label>
    </li>
  )
}

export default Navbar