import { useState } from "react"

type AuthUser = {
    name : string,
    email: string
}

const User = () => {
    const [user,setUser] = useState<AuthUser | null>()
    const handleLogin = () =>{
        setUser({
            name : 'Raman',
            email :'Raman@gmail.com'

        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (<>
    
    <button onClick={handleLogin}>User Login</button>
    <button onClick={handleLogout}>User Logout</button>
    <div>The name is{user?.name}</div>
    <div>The email is {user?.email}</div>


    </>)
}

export default User