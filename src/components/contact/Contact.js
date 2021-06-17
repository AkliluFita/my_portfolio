import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className='contact control-sec' id='contact'>
            <div><h1 className='main-contact-title'>Contact Page</h1> </div>
            <div className="contact-containers ">
                <div className="cnt-item cnt-left">
                  <div className="contact-form">
                       
                  </div>
                </div>
                <div className=" cnt-item cnt-left">
                       <div className="contact-main">
                           <div className="contact-title">
                               <h3>please contach me </h3>
                           </div>
                           <form className='contact-form'>
                                <div class="mb-3">
                                                <label  class="form-label">User Name</label>
                                                <input type="text" class="form-control" ></input>
                                </div>
                                <div class="mb-3">
                                                <label class="form-label">Email</label>
                                                <input type="email" class="form-control" ></input>
                                </div>
                                <div class="mb-3">
                                                <label class="form-label">Phone Number</label>
                                                <input type="message" class="form-control" ></input>
                                </div>
                                <div class="mb-3">
                                                <label class="form-label">Comments</label>
                                                <textarea   class="form-control" ></textarea>
                                </div>
                                <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input"></input>
                                                <label class="form-check-label">Check me out</label>
                                </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                           </form>
                       </div>
               
                </div>
            </div>
        </div> 
    )
}

export default Contact
