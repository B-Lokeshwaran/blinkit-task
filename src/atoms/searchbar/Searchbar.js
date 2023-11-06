import React from 'react'
import {  FormControl } from "react-bootstrap";

function Searchbar({className, type, placeholder, onChange}) {
  return (
    
    <FormControl
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />

  )
}

export default Searchbar