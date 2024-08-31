import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                // Await the Axios call
                const response = await axios.get('https://dummyjson.com/posts');
                setData(response.data.posts); // Adjust based on the actual response structure
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        // Call the async function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Posts</h1>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error.message}</p>}
            <ul className="space-y-4">
                {data.map(post => (
                    <li key={post.id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <div className="mt-4">
                            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{post.tags.join(', ')}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetchingComponent;
