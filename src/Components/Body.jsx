import React from 'react'
import img from "../Images/trucks.webp";
import { PiPackageDuotone } from "react-icons/pi";
export default function Body() {
  return (
    <div className='container'>
        <div className='body-div'>
            <div className="left-desc">
        <h1 className='body-h1'>We Will Deliver Your <span className="box-icon"><PiPackageDuotone /></span> <br />Packages Anywhere!</h1>
                <h2>FIND IT | BUY IT | SHIP IT</h2>
                <h3>We let you around the world and ship to logisippo straight to your doorstep</h3>
            </div>
            <div className='right-desc'>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}
