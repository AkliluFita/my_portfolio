import React from 'react'
import './intro.css'

function Intro() {
    return (
        <div className="intro control-sec" id='intro'>
            <div className="intro-left">
               <div className="imgContainer shadow p-3 mb-5 bg-body rounded" >
                    <a target="_blank" href="assets/abdu2 (1).jpg">
                        <img className='my_img' src="assets/abdu2 (1).jpg" alt="" />
                    </a>
                  
               </div>
               <div className='intro-text shadow p-3 mb-5 bg-body rounded'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                    ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                    ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ea
                    </p>
                    <button type="button" class="btn btn-success">Submit</button>
               </div>
            </div>
            <div className="intro-right">
                <div className="wrapper shadow p-3 mb-5 bg-body rounded">
                    <h2 className="typing-demo"> Aklilu Jemal Fita</h2>
                    <h2>Web Developer</h2>
                </div>
                <a href="#portfolio">
                  <i class="fa fa-chevron-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Intro
