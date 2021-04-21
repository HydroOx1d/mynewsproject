import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="top">
          <div className="top__logo">News.kg</div>
          <nav className="nav top__nav">
            <NavLink exact to="/" className="top__nav__link">Главная</NavLink>
            <NavLink to="/news" className="top__nav__link">Новости</NavLink>
            <NavLink to="/" className="top__nav__link">Добавить</NavLink>
          </nav>
          <NavLink to="/signup" className="top__btn btn">Регистрация</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navigation
