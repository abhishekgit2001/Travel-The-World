import React, { useState } from "react";

const Cout = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>You Click Me {count}</p>
            <button onClick={() =>setCount(count+1)}>
                Click Me
            </button>
        </div>
    )
}

export default Cout