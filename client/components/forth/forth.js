import React from 'react'
import './forth.css'
// eslint-disable-next-line import/no-unresolved
import '../assets/scss/fourth.css'

const Forth = () => {
  return (
    <div className="flex bg-blue-200">
        <tr className="col-2">
            <td className="str3 bg-green-400">1</td>
            <td className="str3 bg-red-400">1</td>
            <td className="str3 bg-green-400">1</td>
            <td className="str3 bg-red-400">1</td>
        </tr>
        <tr className="col-2">
            <td className="str3 bg-red-400">2</td>
            <td className="str3 bg-green-400">2</td>
            <td className="str3 bg-red-400">2</td>
            <td className="str3 bg-green-400">2</td>
        </tr>
        <tr className="col-2">
            <td className="str3 bg-yellow-400">3</td>
            <td className="str3 bg-blue-400">3</td>
            <td className="str3 bg-yellow-400">3</td>
            <td className="str3 bg-blue-400">3</td>
        </tr>
        <tr className="col-2">
            <td className="str3 bg-blue-400">4</td>
            <td className="str3 bg-yellow-400">4</td>
            <td className="str3 bg-blue-400">4</td>
            <td className="str3 bg-yellow-400">4</td>
        </tr>
    </div>
  )
}



export default Forth
