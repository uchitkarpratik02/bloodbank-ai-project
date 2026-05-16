import { useState } from "react"
import axios from "axios"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async () => {

try{

const res = await axios.post("http://localhost:5000/api/login",{

email,
password

})

localStorage.setItem("token",res.data.token)

alert("Login Successful")

}catch(err){

alert("Login Failed")

}

}

return(

<div className="max-w-md mx-auto bg-white shadow p-6 rounded">

<h2 className="text-xl font-bold mb-4">Login</h2>

<input
className="border p-2 w-full mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border p-2 w-full mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded"
onClick={login}
>

Login

</button>

</div>

)

}

export default Login