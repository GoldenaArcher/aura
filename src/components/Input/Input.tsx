import React, {useEffect, useState} from 'react'
import "./Input.scss"
import errorIcon from "../../assets/svg/error.svg";

type InputPropType = {
  className?: string;
  placeholder?: any;
  errorMessage?: string;
  [x:string]: any;
}

export default function Input({className,placeholder="placeholder",errorMessage="",...rest}:InputPropType) {

  const [value,setValue] = useState("");
  const [error,setError] = useState(false);

  useEffect(()=>{
    if(errorMessage!=="") setError(true);
    else setError(false);

  },[errorMessage])

  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
  }

  return (
    <div className='input__container'>
      <input
        placeholder={placeholder}
        className={"input__field "+className}
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {error && <div className="input__error">
        <img className='input__error__icon' src={errorIcon} alt="error"/>
        <span className='input__error__message'>{errorMessage}</span>
      </div>}
    </div>
  )
}
