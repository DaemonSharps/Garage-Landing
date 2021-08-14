import React from "react";
import garJpeg from "../img/garage.jpg";

export const Form = () =>(
    <form className="row my-3 d-flex justify-content-center">
        <h2 className="text-center mb-3">Запись на приемъ</h2>
        <div className="col-md-8">
            <input type="email" className="form-control mb-2" placeholder="your@mail.com"/>
            <input type="text" className="form-control mb-2" placeholder="Имя"/>
            <input type="text" className="form-control mb-2" placeholder="Фамилия"/>
            <input type="text" className="form-control mb-2" placeholder="Отчество"/>
            <div className="row mb-3">
                <div className="col-md-4">
                <label>Дата: </label>
                    <input className="form-control" type="date"/>
                </div>
                <div className="col-md-4">
                <label>Время: </label>
                    <input className="form-control" type="time"/>
                </div>
                <div className="col-md-4">
                    <label>Место: </label>
                    <select className="form-control">
                        <option value>1</option>
                        <option value>2</option>
                        <option value>3</option>
                        <option value>4</option>
                        <option value>5</option>
                    </select>
                </div>
            </div>
            <input type="submit" className="btn btn-success" value="Подтвердит-с"/>
            
        </div>
        <div className="col-md-4">
            <img className="garageImg img-thumbnail img-fluid" alt="Responsive" src={garJpeg}/>
        </div>
    </form>
)