import React, { useEffect, useState } from 'react'
import './Header.css'
import { LiaSearchSolid } from "react-icons/lia";


function Header() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? handleShow(true) : handleShow(false)
        })
    }, [])

    return (
        <div className={`header ${show && "header_black"}`}>
            <div className='brand-line1' >WOOKIE </div>
            <div className='brand-line2'>
                <div className='Movies'>MOVIES</div>
                <div className='search-bar'>
                   <div className='search-icon'> <LiaSearchSolid  /></div>
                    <input />
                </div>
            </div>

        </div>
    )
}

export default Header