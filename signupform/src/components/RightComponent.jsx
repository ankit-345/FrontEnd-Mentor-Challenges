import React, { useState } from 'react'
import Input from './Input'

const RightComponent = () => {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: ""
    });

    const inputs = [
        {
            id: 1,
            errorMessage: "First name cannot be empty",
            name: "FirstName",
            type: "text",
            className: "input",
            placeholder: "First Name",
            required: true
        },
        {
            id: 2,
            errorMessage: "Last Name cannot be empty",
            name: "LastName",
            type: "text",
            className: "input",
            placeholder: "Last Name",
            required: true
        },
        {
            id: 3,
            errorMessage: "Looks like this is not an email",
            name: "Email",
            type: "email",
            className: "input",
            placeholder: "Email Address",
            required: true
        },
        {
            id: 4,
            errorMessage: "Password -> 7-15 characters, atleast 1 number, special character",
            name: "Password",
            type: "password",
            className: "input",
            pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
            placeholder: "Password",
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value })
    }
    
    const onInvalid = (e) =>{
        console.log(e);
    }

    return (
        <>
            <section className="right">
                <div className="form-head">
                    <p><span style={{ fontWeight: "bold" }}>Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        {
                            inputs.map((input) => (

                                <Input key={input.id} {...input} values={values[input.name]} onChange={onChange} onInvalid={onInvalid}/>
                            ))
                        }

                    </form>
                    <button className="btn">CLAIM YOUR FREE TRIAL</button>
                    <p className="terms">By clicking the button, you are agreeing to our <span style={{ color: "hsl(0, 100%, 74%)", fontWeight: "bold" }}>Terms and Services</span></p>
                </div>
            </section>
        </>
    )
}

export default RightComponent