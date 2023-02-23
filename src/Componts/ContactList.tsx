type contactListProps = {
    name : {
    firstName: string,
    lastName: string
    }[]
}
const ContactList= (props : contactListProps) =>{
    return (
        <>
        {props.name.map(names => {
        return (
            <h2 key={names.firstName}>
                {names.firstName} {names.lastName}
            </h2>
        )
        })}
        </>
    )

}

export default ContactList