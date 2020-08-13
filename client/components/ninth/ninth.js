import React from 'react'
import './ninth.css'
// eslint-disable-next-line import/no-unresolved
import '../assets/scss/ninth.css'


const Ninth = () => {
  return (
    <div className="flex h-screen">
       <div className="square2 m-auto">
           <tr className="flex justify-start">
               <td className="col-6 bg-yellow-400">1</td>
           </tr>
           <tr className="flex justify-center">
               <td className="col-6 bg-green-400">2</td>
           </tr>
           <tr className="flex justify-end">
               <td className="col-6 bg-blue-400" >3</td>
           </tr>
       </div>
    </div>
  )
}



export default Ninth
