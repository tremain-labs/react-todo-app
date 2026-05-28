import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0)
    
        return(
        <>
             <p>Count: {count}</p>
             <button onClick={() => setCount(count + 1)}>Click me to Add one</button>
        </>
        )
    
}
export default Counter;