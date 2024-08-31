import { useState } from "react";
import ListEachItem from "./ListEachItem";

let AllItem = ({ Item }) => {
    // let newFruite = newItem;

    let [activeItem, setActiveItem] = useState([]);


    let Handleevent = (item) => {
        console.log(`  ${item}  was bought`);

        let newItem = [...activeItem, item];
        setActiveItem(newItem)


    };

    return (
        <ul className="p-4 list-disc list-inside">
            {Item.map((item, index) => (
                <ListEachItem
                    key={index}
                    Item={item}  // Pass the individual item here
                    bought={activeItem.includes(item)}
                    HandleClick={() => Handleevent(item)}
                />
            ))}
        </ul>
    );
};


export default AllItem;
