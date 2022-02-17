import React, { useState, useRef, useEffect } from 'react'
import { links } from '../data'
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);
   const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const navLinkStyles = ({ isActive }) => {
      return {
        borderBottom: isActive ? '2px solid #000' : 'none'
      }
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div>
        <nav className="bg-white-100">
            <div>
                <div className="flex justify-between items-center p-6" >
                    <p className="font-sans text-2xl text-black-200 font-light leading-loose"> Shaply Demo </p>
                    <button className="text-blue-800" onClick={toggleLinks}> <FaBars/> </button>
                </div>
                <div className='h-0 overflow-hidden transition duration-150 ease-linear pl-10' ref={linksContainerRef}>
                    <ul className='flex justify-evenly flex-col block transition duration-150 ease-linear' ref={linksRef}>
                        {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li className="leading-10"key={id}>
                            <NavLink className="text-black-200 text-sm font-medium" style={navLinkStyles} to={url}>{text}</NavLink>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar