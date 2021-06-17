import React from 'react'
import './menu.css'

function Menu(props) {

    const{hamberger,sethamberger} =props

    const handleMenu = () => {
        sethamberger(!hamberger)
    }
    return (
        <div className="menu control-sec" >
             <ul >
                
                <li><a href="#intro" onClick={handleMenu}>Home</a></li>
                <li><a href="#portfolio" onClick={handleMenu}>portfolio</a></li>
                <li><a href="#testimonials" onClick={handleMenu}>testimonials</a></li>
                <li><a href="#contact" onClick={handleMenu}>contact</a></li>
            </ul>
        </div>
    )
}

export default Menu