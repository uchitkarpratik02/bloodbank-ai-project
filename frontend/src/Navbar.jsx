import { Link } from "react-router-dom"

function Navbar(){

const logout = () => {

localStorage.removeItem("token")

alert("Logged Out")

window.location.href = "/login"

}

const token = localStorage.getItem("token")

return(

<nav className="bg-red-600 text-white p-4 flex justify-between items-center">

<h1 className="text-xl font-bold">
🩸 Blood Bank
</h1>

<div className="flex gap-4 items-center">

<Link to="/">Home</Link>

<Link to="/register">Register</Link>

<Link to="/search">Search</Link>

<Link to="/emergency">Emergency</Link>

{token && <Link to="/dashboard">Dashboard</Link>}

{!token && <Link to="/login">Login</Link>}

{token && (

<button
onClick={logout}
className="bg-white text-red-600 px-3 py-1 rounded"
>

Logout

</button>

)}

</div>

</nav>

)

}

export default Navbar