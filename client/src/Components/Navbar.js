import React from 'react'
import "../style/navbar.css"
import Options from './Options'

export default function Navbar() {
  return (
    <div className='navCnt'>
      <div className="title">WePlay</div>
      <Options/>
    </div>
  )
}
