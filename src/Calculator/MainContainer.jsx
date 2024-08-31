import { useState } from "react";
import DisplayButton from "./DisplayButton";
import DisplayInput from "./DisplayInput";

const MainContainer = () => {


    let [calval, setCalVal] = useState("");

    const clickButton = (button) => {
        console.log("click", button)

        if (button == "C") {




            setCalVal("")
        } else if (button == "=") {


            let result = eval(calval)
            setCalVal(result)
        } else {
            let newValue = calval + button;
            console.log(newValue)
            setCalVal(newValue)
            console.log(`the value of cal ${calval}`)

        }




    }








    return (
        <div className="flex items-center justify-center  p-4  bg-blue-100 rounded shadow-md  ">
            <div className="bg-white  rounded-lg shadow-md space-y-8">
                <DisplayInput calval={calval} />
                <DisplayButton clickButton={clickButton} />
            </div>
        </div>
    );
};

export default MainContainer;
