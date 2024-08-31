const DisplayInput = ({ calval }) => {
    return (
        <input
            type="text"
            placeholder="Enter Value"
            className="w-full p-4 text-right text-2xl font-mono bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={calval}
            readOnly
        />
    );
};

export default DisplayInput;
