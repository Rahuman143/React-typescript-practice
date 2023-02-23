
type StatusProps ={
    status : 'loading' | 'Success' | 'error'
}


const Staus = (props : StatusProps) =>{
    let messages
    if(props.status === 'loading')
    {
        messages = 'loading***'
    }
    else if(props.status === 'Success')
    {
        messages = 'Data Attched Sucessfully!'
    }
    else if(props.status === 'error')
    {
        messages = 'Still Errors plz check'
    }
    return(
        <>
        <h2>status - {messages}</h2>
        </>
    )
}
export default Staus