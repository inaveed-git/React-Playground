const SingleUser = ({ user }) => {
    return (
        <div className="bg-white w-fit p-6 rounded-lg shadow hover:bg-gray-50 transition duration-200 mx-2 my-4">
            <p className="text-lg font-semibold text-gray-800">Username: {user.username}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <hr className="my-4" />
            <p className="text-xs text-gray-500">Password: {user.password}</p>
        </div>
    );
};

export default SingleUser;
