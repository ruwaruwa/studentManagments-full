import React, { useState } from 'react'

export default function AddStudent() {
    //post
    const [name,setname]=useState('')
    const [studentId,setStudentId]=useState('')
    const [phone,setphone]=useState('')
    const [address,setAddress]=useState('')
    const [courses,setCourses]=useState('')
    const [classes,setClass]=useState('')
    //create newStudent
    const handleSaveStudent=()=>{
        axios.post('http://localhost:1000/student',{
            name:name,
            studentId:studentId,
            phone:phone,
            address:address,
            courses:courses,
            classes:classes
        }).then((response)=>{
        alert(response.data)
        })
    }
  return (
    <div>
        <div>
        <div className='bg- p-4 sm:ml-[21%] ml-[27%] bg-'>
         
        <div className="sm:w-[500px] shadow-lg shadow-black sm:ml-[200px] mt-4 sm:p-4 px-3 py-3">
          <form className='text-center sm:pt-10 pt-10'>
              <div className="mt-">
                
              <label></label>
       <input  type="text" className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3"placeholder='Enter Student ID' />
       <input  type="text" className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3"placeholder='Enter Student Name' /><br></br>
       <input value={phone} onChange={(e)=>setphone(e.target.value)}  type="text" className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3"placeholder='Enter Student Phone' />
       <input value={address} onChange={(e)=>address(e.target.value)}  type="text" className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3"placeholder='Enter Student Address' /><br></br>
    
     <div>
    
        <select className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3" >
            <option placeholder='select class'>Select class</option>
            <option  value={classes} onChange={(e)=>setClass(e.target.value)}></option>
          

        </select>
        {/* //// */}
     </div>
     <div>
    
    <select className="sm:h-[45px] sm:w-[350px] border-rose-400 border-2 pl-5 ml-3" >
        <option placeholder='select class'>Select course</option>
        <option  value={courses} onChange={(e)=>setCourses(e.target.value)}></option>
    </select>
 </div>
       {/* <input type="text" className="h-[45px] w-[350px] border-rose-400 border-2 pl-5 mr-[350px] mt-4 "placeholder='Date' /><br></br> */}
       <button onClick={handleSaveStudent}  className='bg-secondaryColor px-20 py-2 text-white rounded sm:mt-8 mt-4 '>save</button>
        </div>
       
          </form>
        
        </div>
        </div>

        </div>
        
    </div>
  )
}
