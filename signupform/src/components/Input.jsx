import React, { useState } from 'react'
import erroricon from '../images/icon-error.svg';


const Input = (props) => {
    const [focussed, setFocussed] = useState(false);
    const { id, errorMessage, onChange, onInvalid, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocussed(true);
    }

    return (
        <>
            <div className="form-group">
                <div className='form-border'>
                    <input  {...inputProps} 
                    onChange={onChange}
                    onInvalid={onInvalid}
                    onBlur={handleFocus}  // When Click and leave
                    // onFocus={()=> inputProps.name === 'confirm password' && setFocussed(true)}    // When Click (Used with confirm password)
                    focussed={focussed.toString()} />
                    <img src={erroricon} alt="error icon" className='icon' />
                    <div className='errorMessage'>{errorMessage}</div>
                </div>
            </div>
        </>
    )
}

export default Input