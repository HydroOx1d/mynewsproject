import React from 'react'
import "./ModalSignUp.css"

function ModalSignUp() {
  return (
    <div>
      <div className="modal">
        <div className="container">
          <div className="modal__inner">
            <form action="#" className="modal__form">
              <input className="modal__input" type="text" placeholder="Name"/>
              <input className="modal__input" type="number" placeholder="Telephone"/>
              <input className="modal__input" type="email" placeholder="E-mail"/>
              <input className="modal__input" type="password" placeholder="Password"/>
              <input className="modal__input" type="password" placeholder="Confirm password"/>
              <button className="modal__btn">Зарегистроваться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSignUp
