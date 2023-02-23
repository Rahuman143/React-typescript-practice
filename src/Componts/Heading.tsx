type headingProps = {
    Children :string
}

const Heading = (props : headingProps) =>{
    return(
        <>
        <h1>{props.Children}</h1>
        </>
    )
}
export default Heading
