import HeadingTitle from "./HeadingTitle";
import TodoList from "./TodoList";
import ShowTodoData from "./ShowTodoData";
import { useState } from "react";
import Welcome from "./Welcome";

const DataSupplier = () => {
    let [itemData, setnewItem] = useState([]);

    const handleData = (task, date) => {
        console.log(`the task is ${task} and date is ${date}`);
        const newItem = [...itemData, { id: Date.now(), task, date }];
        setnewItem(newItem);
    };

    const handleDeleteButton = (itemId) => {
        const newTodoItems = itemData.filter((item) => item.id !== itemId);
        setnewItem(newTodoItems);
    };

    return (
        <>
            <HeadingTitle />
            <TodoList handleDataparent={handleData} />
            {itemData.length === 0 && <Welcome />}
            <ShowTodoData itemData={itemData} DeleteClick={handleDeleteButton} />
        </>
    );
};

export default DataSupplier;
