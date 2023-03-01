import { Name } from "./Person.types"

// type contactListProps = {
//     name : {
//     firstName: string,
//     lastName: string
//     }[]
// }
type contactListProps = {
    name : Name[]
}
const ContactList= (props : contactListProps) =>{
    return (
        <>
        {props.name.map((names) => {
        return (
            <h2 key={names.first}>
                {names.first} {names.last}
            </h2>
        )
        })}
        </>
    )

}

export default ContactList