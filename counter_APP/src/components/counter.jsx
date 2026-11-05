import { useState, useEffect } from "react";
function Counter(){
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? Number(savedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const up = () => {
        setCount(prev => prev + 1);
    };

    const down = () => {
        setCount(prev => Math.max(0, prev - 1));
    };
    const reset=()=>{
        setCount(0);
    };
    return(
        <div className="counter-card">

            <h2>Counter App</h2>

            <h1>{count}</h1>

            <div className="buttons">

                <button onClick={down}>
                    - Decrease
                </button>

                <button onClick={reset}>
                    Reset
                </button>

                <button onClick={up}>
                    + Increase
                </button>

            </div>

        </div>
    
    );
}

export default Counter;