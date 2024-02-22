import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import SideNav from './components/dashbourd/SideNav'
import { Route, Routes } from 'react-router-dom'
import Students from './components/pages/Students'
import Dashbourd from './components/dashbourd/Dashbourd'
import Courses from '../src/components/pages/courses/Courses'
import Class from './components/pages/class/Class'
import Ducuments from './components/pages/ducuments/Ducuments'
import Users from './components/pages/users/Users'
import SideNav from './components/dashbourd/Sidebar'
import AddStudent from './components/pages/students/AddStudent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
   {/* <SideNav/> */}
   <SideNav/>
   <Routes>
  <Route  path='/dashbourd' element={< Dashbourd/>}/>
  <Route path='/students' element={<Students/>}/>
  <Route path='/addstudents' element={<AddStudent/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/class' element={<Class/>}/>
  <Route path='/ducuments' element={<Ducuments/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/login' element={<h1>helo login</h1>}/>
   </Routes>
      </div>
    </>
  )
}

export default App
