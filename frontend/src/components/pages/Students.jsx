import React, { useEffect, useState } from 'react'
import SideNav from '../dashbourd/SideNav'
import { Link } from 'react-router-dom'
import StudentList from './students/StudentList'
import axios from 'axios'
export default function Students() {
  const [datas,setdatas]=useState([])
  const getAlldata=()=>{
    axios.get('http://localhost:1000/student').then((response)=>{
      setdatas(response.data)
    })
  }
  useEffect(()=>{
    getAlldata()
  },[])
  //post
  return (
    <div className=''>
          {/* <SideNav/> */}
    <div className='bg-red- p-0'>
       
        <div className='p-4 sm:ml-[20%] ml-[26%]'>
        {/* <h1 className='text-5xl text-black'>Students</h1> */}
      <div className='flex justify-between ml-2 py-4 px-4'>
        <Link to={'/addstudents'} className='text-5xl text-white bg-primaryColor px-3 p-3 rounded-lg'><i class="fa-solid fa-plus text-white"></i></Link>
       <div>
       <input type='text' placeholder='' className='p-3 px-8 border-2 '/>
       </div>
      </div>
<div className='sm:ml-[30px] ml-6'>
{  datas ? <StudentList clientData={datas} /> :null }
</div>
        </div>
    </div>
    </div>
  )
}
