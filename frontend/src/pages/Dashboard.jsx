import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard(){

const [donors,setDonors] = useState([])
const [requests,setRequests] = useState([])

// ✅ getData ऊपर declare करो
const getData = async () => {

    try{

        const donorRes = await axios.get("http://localhost:5000/api/donors")
        const requestRes = await axios.get("http://localhost:5000/api/requests")

        setDonors(donorRes.data)
        setRequests(requestRes.data)

    } catch(err){
        console.log(err)
    }

}

useEffect(()=>{
    getData()
},[])

const deleteDonor = async (id) => {

    try{

        await axios.delete(`http://localhost:5000/api/donor/${id}`)

        alert("Donor Deleted")

        getData()

    } catch(err){
        console.log(err)
    }

}

return(

<div className="p-6">

<h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

<div className="grid grid-cols-2 gap-4 mb-6">

<div className="bg-white shadow p-4 rounded">
<h3>Total Donors</h3>
<p>{donors.length}</p>
</div>

<div className="bg-white shadow p-4 rounded">
<h3>Total Requests</h3>
<p>{requests.length}</p>
</div>

</div>

<h3>Blood Requests</h3>

{requests.map((r)=>(
<div key={r._id} className="bg-white shadow p-4 mb-3 rounded">

<p>{r.patientName}</p>
<p>{r.bloodGroup}</p>

</div>
))}

<h3 className="mt-6">Donor List</h3>

{donors.map((d)=>(
<div key={d._id} className="bg-white shadow p-4 mb-3 rounded">

<p>{d.name}</p>
<p>{d.bloodGroup}</p>

<button onClick={()=>deleteDonor(d._id)}>
Delete
</button>

</div>
))}

</div>

)

}

export default Dashboard