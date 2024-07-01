import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
// json-server --watch db.json

function Create(){
    const[value,setValue]=useState({id:"",name:"",email:""})
  const navigate=useNavigate();
    function handleclick(e){
        e.preventDefault();
        axios.post(`http://localhost:3000/users`,value)
        .then(res=>console.log(res))
        navigate('/')

    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleclick} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                    ID
                </label>
                <input 
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="id" 
                    value={value.id} 
                    type="text" 
                    onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} 
                    placeholder="Enter Your ID" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input 
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="name" 
                    value={value.name} 
                    type="text" 
                    onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} 
                    placeholder="Enter Your Name" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="email" 
                    value={value.email} 
                    type="email" 
                    onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} 
                    placeholder="Enter Your Email" 
                />
            </div>
            <div className="flex items-center justify-between">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                    ADD
                </button>
            </div>
        </form>
    </div>
    )
}
export default Create