import React from "react";

export function Button({label}){

  const styleButton = {
    fontFamily: 'Helvetica',
    width: '6rem',
    margin: '1rem',
    backgroundColor: 'transparent',
    fontWeight: 'semibold',
    color: '#444',
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    border: '2px solid #eee',
    borderRadius: '.5rem',
    cursor: 'pointer',
    trasition: 'all 1s ease',
    boxShadow: '.5rem .5rem 1rem #ccc',
    boxShadow: '-.5rem -.5rem 1rem #fff',
  }

  return(
    <>
    <button style={styleButton}>{label}</button>
    </>
  )
}