import { Link } from "react-router-dom"

function Navbar(){

const logout = () => {
  localStorage.removeItem("token")
  alert("Logged Out")
  window.location.href = "/login"
}

return(

<div style={{marginBottom:"20px"}}>

<Link to="/">Home</Link> | 
<Link to="/register"> Register Donor</Link> | 
<Link to="/search"> Search Blood</Link> |   
<Link to="/emergency"> Emergency</Link> |             
<Link to="/dashboard"> Dashboard</Link> | 
<Link to="/login"> Login</Link> | 

<button onClick={logout}>
  Logout
</button>

</div>

)

}

export default Navbar