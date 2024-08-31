import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";


const TodoList = ({ handleDataparent }) => {



    let [task, setTask] = useState("");
    let [date, setDate] = useState("");




    let handleTask = (e) => {


        setTask(e.target.value)

    }

    let handleDate = (e) => {
        setDate(e.target.value)
    }




    let handleAddButton = () => {
        handleDataparent(task, date);
        setTask("")
        setDate("")
    }

    return (


        <div className="main">






            <div className="inputDataFields  flex justify-center items-center space-x-3 input-fields mb-2 text-blue-700 bg-blue-100 rounded shadow-md p-5">
                <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Task"
                    value={task}
                    onChange={handleTask}
                    required
                />



                <input
                    type="Date"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={date}
                    onChange={handleDate}
                    required
                />


                <button

                    onClick={handleAddButton}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-25 px-5 h-10 text-center "><IoMdAddCircle />
                </button>
            </div>









        </div>






    )


}


export default TodoList;