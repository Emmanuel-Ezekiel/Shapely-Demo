import React, { useState, useRef, useEffect } from 'react'
import { Links } from '../data'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <nav bg-white-100>
            <div>
                <div flex->
                    <h1> Shaply Demo </h1>
                    <button> <FaBars/> </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar