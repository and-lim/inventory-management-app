import Input from './Input';
import React from 'react'
import Label from './Label';

const InputForm = (props) => {
    const {label, name, type, placeholder,value,onChange} = props;
  return (

    <div className='mb-5'>
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}></Input>
    </div>
  )
}

export default InputForm