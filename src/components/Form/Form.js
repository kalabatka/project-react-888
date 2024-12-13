import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {

    const [value, setValue] = useState();
    return (
        <form className="form_item" 
        onSubmit={
            e => {
                e.preventDefault();
                props.putTodo(value);
                setValue("");
            }
        }>
            <input type="text" placeholder="enter text" className="input_form" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
};

export default Form;