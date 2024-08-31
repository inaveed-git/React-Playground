import { FaCartPlus } from "react-icons/fa";


let ListEachItem = ({ Item, bought, HandleClick }) => {


    // let fruits = ['banana', 'mango', 'stwebarry', 'avacado', 'cherry'];

    return (




        <>

            <li
                className={`mb-2 p-4 rounded-lg shadow-md ${bought ? "bg-green-100 border border-red-300" : "bg-white"
                    } transition-all duration-300 ease-in-out`}
            >
                <span className="font-medium text-gray-700">{Item}</span>

                <button onClick={HandleClick}
                    type="button" className=" float-right	 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5  text-center me-2 mb-2"><FaCartPlus />
                </button>


            </li>



        </>
    )



}


export default ListEachItem;