import React from "react"

type buttonsProps = {
    handleClick :(event : React.MouseEvent<HTMLButtonElement>, id :number) => void
}

const Button = (props : buttonsProps) =>{
    return (
        <>
        <button onClick={(event)=> props.handleClick(event,1)}>Submit</button>
        </>
    )
}
export default Button