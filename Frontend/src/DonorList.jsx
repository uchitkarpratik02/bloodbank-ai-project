import { useEffect, useState } from "react"
import axios from "axios"

function DonorList(){

const [donors,setDonors] = useState([])
const [bloodFilter,setBloodFilter] = useState("")
const [loading,setLoading] = useState(true)

useEffect(()=>{
    getDonors()
},[])

const getDonors = async ()=>{
    try{
        const res = await axios.get("http://localhost:5000/api/donors")
        setDonors(res.data)
        setLoading(false)
    }catch(err){
        console.log(err)
    }
}

const filteredDonors = donors.filter((d)=>{
    return d.bloodGroup
    .toLowerCase()
    .includes(bloodFilter.toLowerCase())
})

return(

<div>



<input
placeholder="Enter Blood Group (O+, A+)"
onChange={(e)=>setBloodFilter(e.target.value)}
/>

<br/><br/>

{loading ? (
    <p>Loading...</p>
) : filteredDonors.length === 0 ? (
    <p>No donors found</p>
) : (
    filteredDonors.map((d)=>(

<div key={d._id} style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}>

<h3>{d.name}</h3>

<p>Blood Group: {d.bloodGroup}</p>

<p>Phone: {d.phone}</p>

<p>Location: {d.location}</p>

</div>

))
)}

</div>

)

}

export default DonorList