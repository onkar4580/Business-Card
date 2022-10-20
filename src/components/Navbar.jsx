import React from 'react'

function Navbar() {
  return (
    <div className='nav-div'>
      <div className='navbar-class'>
        <figure>
          <img src="https://i.postimg.cc/ZRJQQY95/logo.png" alt="logo" className='logoimg-class' />
        </figure>
      <h2 className='h-class'>My React Developers</h2>
      <ul>
        <li className='ul--class'>home</li>
        <li className='ul--class'>hire</li>
        <li className='ul--class'>about</li>
        <li className='ul--class'>contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar