import React from 'react';

export const SearchBox = ({ placeholder, handlechange }) => {
  return (
    <input type="text" onChange={handlechange} placeholder={placeholder}></input>
  )
}