import { useState } from "react"
import axios from "axios"

function Emergency(){

const [patientName,setPatientName] = useState("")
const [bloodGroup,setBloodGroup] = useState("")
const [hospital,setHospital] = useState("")
const [location,setLocation] = useState("")
const [contact,setContact] = useState("")

const submit = async () => {

await axios.post("http://localhost:5000/api/request-blood",{

patientName,
bloodGroup,
hospital,
location,
contact

})

alert("Emergency Blood Request Sent")

}

return(

<div className="max-w-md mx-auto bg-white shadow p-6 rounded">

<h2 className="text-xl font-bold mb-4">Emergency Blood Request</h2>

<input
  className="border border-gray-300 p-2 w-full mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
  placeholder="Patient Name"
  onChange={(e)=>setPatientName(e.target.value)}
/>
<input className="border p-2 w-full mb-3"
placeholder="Blood Group"
onChange={(e)=>setBloodGroup(e.target.value)}
/>

<input className="border p-2 w-full mb-3"
placeholder="Hospital"
onChange={(e)=>setHospital(e.target.value)}
/>

<input className="border p-2 w-full mb-3"
placeholder="Location"
onChange={(e)=>setLocation(e.target.value)}
/>

<input className="border p-2 w-full mb-3"
placeholder="Contact Number"
onChange={(e)=>setContact(e.target.value)}
/>

<button
  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition"
  onClick={submit}
>
  Send Emergency Request
</button>




</div>

)

}

export default Emergency