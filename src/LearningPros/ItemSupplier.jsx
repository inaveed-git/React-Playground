import AllItem from "./AllItem";
import ItemError from "./ItemError";
import InputItem from "./InputItem";
import { useState } from "react";

const ItemSupplier = () => {


    let fruits = ['banana', 'mango', 'stwebarry', 'avacado', 'cherry'];

    // let HandleInput = (e) => {
    //     console.log(e.targer.value)
    // }


    let [text, SetText] = useState("");



    let [newItem, setNewItem] = useState(fruits);



    let handleInput = (e) => {
        console.log(e.target.value)
        SetText(e.target.value);


    }


    let handleAddItem = (e) => {
        if (e.key === "Enter") {
            console.log("working")
            let newItemValue = e.target.value;

            let newItem2 = [...newItem, newItemValue];
            setNewItem(newItem2);
            e.target.value = ""
            SetText("")
        }
    }


    // let [foodItems, setFoodItems] = useState([]);

    // const onKeyDown = (event) => {
    //   if (event.key === "Enter") {
    //     let newFoodItem = event.target.value;
    //     event.target.value = "";
    //     let newItems = [...foodItems, newFoodItem];
    //     setFoodItems(newItems);
    //   }
    // };




    let showText = ` ${text}`;


    return (

        <div className="main my-5   bg-blue-100 rounded shadow-md p-4">


            <h1 className="bg-blue-100 rounded shadow-md text-2xl font-bold">Healty fruites using props</h1>
            <InputItem handleInput={handleInput} keydown={handleAddItem} />
            <p>{showText}</p>
            <ItemError Item={newItem} />
            <AllItem Item={newItem} />



        </div>


    )




}


export default ItemSupplier; 
