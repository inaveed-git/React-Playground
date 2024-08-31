import { useState, useRef } from "react";
import AllUserDate from "./AllUserDate";

const MainForm = () => {
    const usersRef = useRef([]);
    let [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        usersRef.current = [...usersRef.current, user];
        setUser({ username: "", email: "", password: "" });
    };

    return (
        <div className="flex flex-col lg:flex-row p-5 w-full max-w-6xl mx-auto space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Form Section */}
            <form
                className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md"
                onSubmit={submit}
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a New User</h2>
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
                    <input
                        value={user.username}
                        onChange={handleInput}
                        type="text"
                        id="username"
                        name="username"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        placeholder="Enter username"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        value={user.email}
                        onChange={handleInput}
                        type="email"
                        id="email"
                        name="email"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        placeholder="name@example.com"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        value={user.password}
                        onChange={handleInput}
                        name="password"
                        type="password"
                        id="password"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                    Add User
                </button>
            </form>

            {/* User List Section */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">User List</h2>
                <AllUserDate users={usersRef.current} />
            </div>
        </div>
    );
};

export default MainForm;
