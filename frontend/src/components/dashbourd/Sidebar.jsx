import React from 'react'
import {NavLink } from 'react-router-dom'
import { useState } from 'react'
function SideNav({children}) {
const[isOpen , setIsOpen] =useState(false)

const  handleIsOpen =() => {
  setIsOpen(true)
 }
 const  handleClose =() => {
  setIsOpen(false)
 }
return (
  <div>
<div style={{width: isOpen === true ? "100px" : ""}} className='sm:w-[21%] w-[37%] h-screen fixed overflow-hidden bg-primaryColor boder-r-2 border-gray-300'>   
<i onClick={handleIsOpen}  style={{display:isOpen === true ?"none" : "block"}}  class="fa-solid fa-xmark text-white text-4xl absolute right-2 mr-2 mt- p-1  " ></i>
<i onClick={handleClose}  style={{display:isOpen === true ?"block" : "none"}} class="fa-solid fa-bars  text-white  absolute right-5 mr-4 text-3xl mb-[40px] mt-3  "></i>

<div style={{display:isOpen === true ? "none" : "flex" }} className='sm:ml-12 ml-5 mt-12 sm:text-2xl flex flex-col gap-12 text-white transition-all  duration-1000'>
<h1 className='ml- text-3xl mt-0 '>Ruweida</h1>
<NavLink to={"/dashbourd"}  className='cursor-pointer text- hover:underline'><i class="fa-brands fa-microsoft text-white mt- "></i> Dashboard</NavLink>
<NavLink to={"/students"} className='cursor-pointer hover:underline'><i class="fa-solid fa-graduation-cap"></i> Students</NavLink>
<NavLink to={"/class"} className='cursor-pointer hover:underline'><i class="fa-solid fa-layer-group"></i>Class</NavLink>
<NavLink to={"/courses"} className='cursor-pointer hover:underline'><i class="fa-solid fa-book"></i>Courses</NavLink>
<NavLink to={"/ducuments"} className='cursor-pointer hover:underline'><i class="fa-solid fa-file"></i>Ducument</NavLink>
<NavLink to={"/users"} className='cursor-pointer hover:underline text-white'><i class="fa-solid fa-user"></i>Users</NavLink>
  </div>
  <div style={{display : isOpen === true ? "flex" : "none"}} className='ml-10 mt-20 flex-col text-3xl gap-12 hidden'>
 <i class="fa-brands fa-microsoft text-white"></i>
 <i class="fa-solid fa-graduation-cap text-white"></i>
 <i class="fa-solid fa-layer-group text-white"></i> 
 <i class="fa-solid fa-book text-white"></i>
 <i class="fa-solid fa-file text-white"></i>
 <i class="fa-solid fa-user text-white"></i>
 {/* <i class="fa-solid fa-rotate-right text-white"></i> */}
 </div>
 </div>

<div  style={{marginLeft: isOpen === true ? "100px" : "" }} id="main" className='ml-[32%] transition-all duration-700'>
{children}
</div>

  </div>
)
}
export default SideNav