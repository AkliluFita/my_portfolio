import React from 'react'
import './topbar.css'

function Topbar(props) {
const{hamberger,sethamberger} =props
    

    const handleHamberger = () => {
        sethamberger(!hamberger)
    }

    const getColorStyle = () => {
        if (!hamberger) {
            return{ background:" rgb(57, 54, 59)", color:'white' ,transition:"0.05s" , height:"92px"}
        }
        else return{transition:".05s"}
        
    }

    return (
        <div className='topbar control-sec' style={getColorStyle()}>
            <div className="left-bar">
                <a href="#intro" className='logo'>Abdu@WebDev</a>
                <i className="fa fa-user addr">: +905428581821</i>
                <i className="fa fa-envelope addr"> :weaba123abdu@gmail.com</i>
                <i className="fa fa-linkedin addr"> :https://www.linkedin.com/in/aklilu-jemal-493679204</i>
                  
            </div>
            <div className="right-bar">
                <div className="hamburger">
                  <span onClick ={handleHamberger}>{hamberger?<i className="fa fa-bars" ></i>:<i className="fa fa-times"></i>} </span>
                </div>
            </div>
        </div>
    )
}

export default Topbar