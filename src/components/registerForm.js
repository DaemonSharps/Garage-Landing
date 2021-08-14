import React from "react";

export const Form = () =>(
    <form className="row my-3">
        <div className="col-md-8">
            <input type="email" className="form-control" placeholder="your@mail.com"/>
            <input type="text" className="form-control" placeholder="Имя"/>
            <input type="text" className="form-control" placeholder="Фамилия"/>
            <input type="text" className="form-control" placeholder="Отчество"/>
        </div>
        <div className="col-md-4">
            Test
        </div>
    </form>
)