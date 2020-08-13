import React from 'react'
import './fifth.css'
// eslint-disable-next-line import/no-unresolved
import '../assets/scss/main.scss'

const Fifth = () => {
  return (
    <div>
        <div>
            <tr className="list3">
                <td className="list_first bg-green-400">1</td>
                <td className="list_second bg-red-400">2</td>
            </tr>
            <tr className="list3">
                <td className="col-4 bg-yellow-400">2</td>
                <td className="col-4 bg-blue-400">2</td>
                <td className="col-4 bg-yellow-400">2</td>
            </tr>
            <tr className="list3">
                <td className="col-4 bg-red-400">3</td>
                <td className="col-4 bg-yellow-400">3</td>
                <td className="col-4 bg-green-400">3</td>
            </tr>
        </div>
    </div>
  )
}



export default Fifth
