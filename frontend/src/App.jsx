import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"

import Home from "./pages/Home"
import RegisterPage from "./pages/RegisterPage"
import SearchPage from "./pages/SearchPage"
import Emergency from "./pages/Emergency"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

import ProtectedRoute from "./ProtectedRoute"

function App(){

return(

<BrowserRouter>

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="p-6">

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/register" element={<RegisterPage/>} />

<Route path="/search" element={<SearchPage/>} />

<Route path="/emergency" element={<Emergency/>} />

<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route path="/login" element={<Login/>} />

</Routes>

</div>

</div>

</BrowserRouter>

)

}

export default App