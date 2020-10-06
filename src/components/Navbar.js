import React from 'react'

function Navbar (props) {
  return (
    <div>
      <a className='btn btn-success' onClick={props.handleClick}>
        New Todo
      </a>
    </div>
  )
}

export default Navbar
