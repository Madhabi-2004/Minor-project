import React from 'react'
import "../Home/home.css"
import CommonSelect from '../../Components/CommonSelect/CommonSelect'

export default function Home() {

const dataset =[
    {
        name:"profile"
    },
    {
        name:"logout"
    }
]

  return (
    <div><h1>Home</h1>
    
    <CommonSelect dataset={dataset} />
    
    </div>
  )
}
