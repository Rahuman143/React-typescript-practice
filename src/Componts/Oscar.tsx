type oscarProps = {
    children:React.ReactNode

}


const Oscar = (props : oscarProps) =>{
    return(
        <>
        The RRR movie nominate Oscar awards{props.children}
        </>
    )
}

export default Oscar