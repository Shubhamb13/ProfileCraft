import { useEffect,useState} from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home(){

    const[data,setData]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users`)
        .then(res=>setData(res.data))
        console.log(data)
    },[])
   
function handledelete(id){
  axios.delete(`http://localhost:3000/users/`+id)
  setData(res => res.filter(item => item.id !== id));
   navigate('/')
   

}
    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">My CRUD Operation</h2>
          <div className="flex justify-end mb-4">
              <Link to="/create" className="bg-violet-600 text-white px-4 py-2 rounded-lg">ADD</Link>
          </div>
          <table className="min-w-full bg-indigo-100 rounded-lg">
              <thead>
                  <tr>
                      <th className="border border-slate-600 text-center px-4 py-2">ID</th>
                      <th className="border border-slate-600 px-4 py-2">Name</th>
                      <th className="border border-slate-600 px-4 py-2">Email</th>
                      <th className="border border-slate-600 px-4 py-2">Action</th>
                  </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-200">
                          <td className="border border-slate-700 text-center px-4 py-2">{item.id}</td>
                          <td className="border border-slate-700 text-center px-4 py-2">{item.name}</td>
                          <td className="border border-slate-700 text-center px-4 py-2">{item.email}</td>
                          <td className="border border-slate-700 text-center px-4 py-2">
                              <Link to={`/edit/${item.id}`} className="bg-amber-400 text-white px-4 py-2 rounded-lg mr-2">Edit</Link>
                              <button onClick={() => handledelete(item.id)} className="bg-red-700 text-white px-4 py-2 rounded-lg">Delete</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  </div>
    )
}
export default Home