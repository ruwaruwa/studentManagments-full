import React, { useState } from 'react'
import Dashbourd from './Dashbourd'
import { Link } from 'react-router-dom'

export default function SideNav({children}) {
    const[isOpen,setIsopen]=useState()
    const handleOpen=()=>{
        setIsopen(true)
    }
  return (
    <div>

        <div>
{/* < started here></> */}
            <div className=' '>
<div className='sm:w-[20%] w-[38%] fixed bg-gray-500 h-screen border-r-2 border-red-500'>
<i style={{display:isOpen === true ? 'block' :''}} onClick={handleOpen} class="fa-solid fa-bars absolute right-2 text-3xl sm:ihdden block  text-white"></i>
<div className='text-white sm:p-4'>
    <h1 className='text-3xl px-2'>ruwa</h1>
    <div className='sm:flex sm:flex-col sm:p-4  p-8 sm:gap-6 gap-20 flex-col sm:space-y-0 space-y-8  ' style={{display:isOpen === true ? 'block' :''}}>
    <Link to={'/dashbourd'}> <i class="fa-brands fa-windows text-"></i>Dashbourd</Link>{""}
        <Link to={'/students'}><i class="fa-solid fa-graduation-cap"></i>Students</Link>
        <Link to={'/class'}><i class="fa-solid fa-layer-group"></i>Class</Link>{""}
        <Link to={'/courses'}><i class="fa-solid fa-book"></i>Courses</Link>
        <Link to={'/ducuments'}><i class="fa-solid fa-file"></i>Ducument</Link>
         <Link to={'/users'}><i class="fa-solid fa-user"></i>users</Link>
         <Link to={'/login'}><i class="fa-solid fa-rotate-right"></i>Logout</Link>
    </div>
</div>
</div>
{/* <Dashbourd/> */}
   </div>
 {/* < ended here></> */}
 <div className='ml-[27%]'>
    {children}
 </div>
        </div>
    </div>
  )
}
