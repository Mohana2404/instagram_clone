import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const Sidebar = () => {
  const Navigate=useNavigate();
  return (
   <div className='m-3 position-fixed'  > 
   <div className='d-flex flex-column gap-3 w-auto'>
    {/* <img className="logotext" src='\assets\pngegg.png' alt="Instagram"/> */}
    <div><h1><i className="bi bi-instagram"></i></h1></div>
    <div><i className="bi bi-house-door "></i>Home</div>
    <div><i className="bi bi-search"></i> Search</div>
    <div><i className="bi bi-compass"></i> Explore</div>
    <div><i className="bi bi-file-play"></i> Reels</div>
    <div><i className="bi bi-chat-heart"></i> Messages</div>
    <div><i className="bi bi-heart"></i> Notification</div>
    <div><i className="bi bi-plus-square"></i> Create</div>
    <div onClick={()=>{Navigate('/profile')}}><i className="bi bi-person-circle"></i> Profile</div>

   
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3'>
    <ThemeToggle/>
    <div><i className="bi bi-three-dots"></i>More</div>
    <div><i className="bi bi-threads"></i>Also from us</div>
    </div>
   </div>
  )
}

export default Sidebar