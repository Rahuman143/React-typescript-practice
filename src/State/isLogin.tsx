import { useState } from "react"

const IsLogin = () => {
    const [isLoggedIn,setisLoggedIN] = useState(false)
    const handleLogin = () =>{
        setisLoggedIN(true)
    }
    const handleLogout = () => {
        setisLoggedIN(false)
    }
    return (<>
    <h1>Welcome</h1>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>The User {isLoggedIn ? 'logged in' : 'logged out'}</div>


    </>)
}

export default IsLogin