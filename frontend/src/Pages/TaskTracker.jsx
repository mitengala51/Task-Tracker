import React from 'react'
import Heading from '../Components/Heading'
import SideBar from '../Components/SideBar'
import TaskCreate from '../Components/TaskCreate'


export default function TaskTracker() {
  return (
        <div className='d-flex gap-3' style={{backgroundColor: '#f8f9fa'}}>
            {/* <Navbar /> */}
            <div>
                <SideBar height="100%"/>
            </div>
    
            <div className='w-100' style={{width: '100%'}}>
                <Heading />

                <TaskCreate />
            </div>
        </div>
  )
}
