import React from 'react'
import Table from './Table'

export default function DashBoard() {
  return (
    <div>
        <h1 className='p-4'>Welcome Back</h1>
        <div className="row row-cols-3-lg justify-content-between gap-3 px-4" style={{width: '100%'}}>
        <div className="col rounded-4 shadow-sm p-4" style={{background: 'white'}}>
            <h3>Projects</h3>
            <h1>3</h1>
        </div>
        <div className="col rounded-4 shadow-sm p-4" style={{background: 'white'}}>
            <h3>Active Tasks</h3>
            <h1>12</h1>
        </div>
        <div className="col rounded-4 shadow-sm p-4"style={{background: 'white'}}>
            <h3>Completed</h3>
            <h1>8</h1>
        </div>

        <Table />

      </div>
    </div>
  )
}
