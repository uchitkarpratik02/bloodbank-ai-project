import { useState } from "react"
import axios from "axios"

function Register(){

const [name,setName] = useState("")
const [bloodGroup,setBloodGroup] = useState("")
const [phone,setPhone] = useState("")
const [location,setLocation] = useState("")

const submit = async () => {

await axios.post("http://localhost:5000/api/add-donor",{

name,
bloodGroup,
phone,
location

})

alert("Donor Added")

}

return(

<div>



<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Blood Group"
onChange={(e)=>setBloodGroup(e.target.value)}
/>

<br/><br/>

<input
placeholder="Phone"
onChange={(e)=>setPhone(e.target.value)}
/>

<br/><br/>

<input
placeholder="Location"
onChange={(e)=>setLocation(e.target.value)}
/>

<br/><br/>

<button onClick={submit}>
Register Donor
</button>

</div>

)

}

export default Register