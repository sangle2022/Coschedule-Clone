import React from 'react';
import  "./main.css";

const Main = () => {
  return (
    <div>
        {/* <div style={{backgroundColor:"#f8f8f8;", height:"700px"}}> */}
        <div className='heading1'>
            
            <img src='https://coschedule.com/img/cos-logo-full-color.svg' alt=''/>
            
        </div>
        <div className='heading2'>
            <h1>Choose Your All-In-One Marketing Calendar</h1>
            <p>Create your calendar free today. No credit card&nbsp; required.</p>
        </div>
        <div className='flex'>
            <div className='box'>
                <div className='plan-title'>Free</div>
                <h2 className='plan-name'>Marketing calender</h2>
                <p>The forever-free marketing calendar to see everything in one place.</p>
                <br />
                <br />
                <br />
                <h1>$0</h1>
                <h3>Free Forever</h3>
                <button>create My Free Calender</button>
                <p>Marketing Calender Free includes:</p>
                <ul>
                    <li>
                        Personal project & Task Management
                    </li>
                </ul>
            </div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        
        <hr /> 
        <div className='endLine'>
            <p>SEE ALL FEATURES</p>
        </div>
        {/* </div> */}
        <div className='quote'>
            <h3>"Before CoSchedule, everything was scattered between email</h3> 
            <h3>and spreadsheets. Now I can easily organize all of my marketing</h3>
            <h3> and keep everyone on the same page."</h3>
            <div className='testimonial'>
                <img src='https://coschedule.com/img/testimonials/beverly-cook.jpeg' alt='Beverly Cook' />
                <p>
                    Beverly Cook
                    <br />
                    NYC Leadership Center
                </p>
            </div>
        </div>
        <div className='faq'></div>
        <div className='footer'></div>
    </div>
  )
}

export default Main;