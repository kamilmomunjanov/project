import React from 'react'
import './third.css'
// eslint-disable-next-line import/no-unresolved
import '../assets/scss/third.css'


const Third = () => {
  return (
    <div>
        <div className="flex flex-wrap">
            <div className="col-1">
                <div className="str1 bg-red-400">1</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-blue-400">1</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-red-400">1</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-blue-400">1</div>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="col-1">
                <div className="str1 bg-green-400">2</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-red-400">2</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-green-400">2</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-red-400">2</div>
            </div>
        </div>
        <div className="flex flex-nowrap">
            <div className="col-1">
                <div className="str1 bg-yellow-400">3</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-green-400">3</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-yellow-400">3</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-green-400">3</div>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="col-1">
                <div className="str1 bg-blue-400">4</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-red-400">4</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-blue-400">4</div>
            </div>
            <div className="col-1">
                <div className="str1 bg-red-400">4</div>
            </div>
        </div>
    </div>
  )
}



export default Third
