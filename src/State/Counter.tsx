import { useReducer } from "react";
type CounterState = {
    count :number}

type CounterACtion = {
    type : string,
    payload : number
}

const initialState = {count:0}

function reducer(state : CounterState,action : CounterACtion) {
    switch(action.type){
        case 'increment':
        return{count: state.count + action.payload }
        case 'decrement':
        return{count: state.count + action.payload }
        default:
            return state
    }

}

const Counter = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <button onClick={() => dispatch({type : 'increment', payload:10})}> Increment </button>
        <button onClick={() => dispatch({type : 'decrement', payload:10})}> Decrement </button>
        </>
    )
}

export default Counter