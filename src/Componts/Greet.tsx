type GreetProps ={
    name: string;
    age : number;
    isLogin : boolean;
}

const Greet = (props:GreetProps) =>{
    return (
    <>
    <h1>
       { props.isLogin? `hi hello ${props.name} iam ${props.age}` : 'All fine'}
    </h1>
    </>
)}

export default Greet