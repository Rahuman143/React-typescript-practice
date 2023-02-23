

type contactProps = {
    name : {
    firstName: string,
    lastName: string
    }
}

const Contact =(props : contactProps) =>{
    return(
    <>
    {<h1>My friend Name is {props.name.firstName} {props.name.lastName}</h1>}
    </>
    )

}

export default Contact