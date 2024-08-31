import { useEffect, useState } from "react";

function ShowTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("time stop")
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-blue-100 rounded-lg shadow-lg">
            <p className="text-2xl font-semibold text-gray-800 mb-2">
                {time.toLocaleDateString()}
            </p>
            <p className="text-4xl font-bold text-gray-900">
                {time.toLocaleTimeString()}
            </p>
        </div>
    );
}

export default ShowTime;
