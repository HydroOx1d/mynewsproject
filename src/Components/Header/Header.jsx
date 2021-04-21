import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__title">Читайте, смотрите и добавляйте всё что творится в Кыргызстане</div>
          <form action="" className="form header__form">
            <input type="tel" className="form__input header__input" placeholder='Телефон'/>
            <input type="password" className="form__input header__input" placeholder='Пароль'/>
          </form>
          <button className="btn header__btn">Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Header 