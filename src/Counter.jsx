import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement =()=>{
        setCount(count + 1);
    }

    const handleDecrement =()=>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const handleReset =()=>{
        setCount(0);
    }

    return (
        <div className="text-center space-y-4">
            <p className="text-2xl font-bold">Counter</p>
            <p className="text-xl">Current Count: {count}</p>
            <div>
                <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2">
                    Increment
                </button>
                <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2">
                    Decrement
                </button>
                <button onClick={handleReset} className="bg-gray-500 text-white px-4 py-2">
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;