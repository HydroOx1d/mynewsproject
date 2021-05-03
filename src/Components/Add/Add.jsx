import React from 'react';
import './Add.css'
import Plus from '../../img/plus.jpg'
import Slider from './Slider/Slider';

function Add() { 

    return (
        <div>
            <div className="Add">
                <div className="container">
                    <div className="add__inner">
                        <form action="#" className="add__form">
                            <input type="text" className="add__input input__text" placeholder="Добавьте заголовок"/>
                            <div className="example-1">
                                <div className="form-group">
                                    <label className="label">
                                        <input type="file"/>
                                        <div className="input__icons"> <img src={Plus} alt=""/></div>
                                    </label>
                                </div>
                            </div>
                            <textarea name="text" placeholder="Добавьте описание" className="add__input input__text"></textarea>
                            <input type="number" className="add__input input__text" placeholder="Номер телефона (необязательно)"/>
                            <input type="email" className="add__input input__text" placeholder="Добавьте почту (необяззательно)"/>
                        </form>
                        <Slider/>
                        <button className="btn add-btn">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
