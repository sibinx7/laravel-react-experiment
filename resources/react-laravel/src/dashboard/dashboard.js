import React from "react";
import dashboardImage from '../../assets/dashboard.jpg'
export default function Dashboard(){
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='flex'>
        <img src={dashboardImage} className='w-100'/>
      </div>
    </div>
  )
}