import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul style={
        {display:'flex',listStyle:'none',alignItems:'center',backgroundColor:'blue',color:'white'}
      }>
        <li style={{
            margin:'20px',
        }}><a href="/" style={{color:'black', fontSize:'30px'}}>home</a></li>
        <li style={{
            margin:'20px',
        }}><a href="/about" style={{color:'black', fontSize:'30px'}}>about</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
