import React from 'react'
import SideBar from '../Components/SideBar'
import DashBoard from '../Components/DashBoard'

export default function HomePage() {
  return (
    <div className='d-flex gap-3' style={{backgroundColor: '#f8f9fa'}}>
        {/* <Navbar /> */}
        <div>
            <SideBar height="100vh"/>
        </div>

        <div className='w-100' style={{width: '100%'}}>
            <DashBoard />
        </div>
    </div>
  )
}
