import React from 'react'

const nextPage = () => {
  return (
    <div className="relative flex flex-col justify-center  overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl mt-10">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          next page
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="file"
              className="block text-sm font-semibold text-gray-800"
            >
              GST form:
            </label>
            <input
              type="file"
              id="file"
              className="block w-full px-2 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          
          <div className="mb-2">
            <label
              htmlFor="file"
              className="block text-sm font-semibold text-gray-800"
            >
              PAN Card:
            </label>
            <input
              type="file"
              id="file"
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            
            Submit 
            </button>
          </div>
        </form>

        
      </div>
    </div>
  )
}

export default nextPage