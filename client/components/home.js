import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div>
      <ul className="flex">
        <li className="flex-1">
          <span className="font-semibold text-xl text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
             href="#">My Layout</span>
        </li>

      </ul>
        <body>
        <div className="bg-gray-200 p-10">
            <div>
                <Link
                    to="/first"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">First task</div>
                </Link>

            </div>
            <div>
                <Link
                    to="/second"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Second task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/third"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Third task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/forth"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Forth task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/fifth"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Fifth task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/sixth"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Sixth task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/seventh"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Seventh task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/eighth"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Eighth task</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/ninth"
                    className="flex justify-center inline-block text-sm mr-6 px-4 py-2 leading-none border rounded text-gray-700  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                    <div className="block text-gray-700 text-center bg-gray-400 px-10 py-2">Ninth task</div>
                </Link>
            </div>
        </div>
        </body>
    </div>
  )
}

Home.propTypes = {}

export default Home
