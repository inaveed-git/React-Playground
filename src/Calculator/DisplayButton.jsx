const DisplayButton = ({ clickButton }) => {
    const buttonNames = [
        "C", "AC", "Theme",
        "1", "2", "3",
        "4", "5", "6", "7",
        "8", "9", "0", "=",
        "+", "-", "*", "/", "."
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-3 ">
            {buttonNames.map((button, index) => (
                <button
                    key={index}
                    onClick={() => clickButton(button)}
                    className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-xl font-semibold"
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

export default DisplayButton;
