import React from 'react'

const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl shadow mx-auto boreder-b">
        <div className="px-8 py-8">
            <div className="font-thin text-3xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">First Name</label>
                <input type="text" className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">Last Name</label>
                <input type="text" className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-2">
                <label className="block text-gray-700 text-sm font-normal">Email</label>
                <input type="text" className="h-8 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-9 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-600 py-2 px-6">Save
                </button>
                <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-600 py-2 px-6 ">Clear
                </button>
            </div>
            
        </div>     
    </div>
  )
}

export default AddEmployee