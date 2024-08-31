import SingleItem from "./SingleItem";




const ShowTodoData = ({ itemData, DeleteClick }) => {
    return (
        <>
            {itemData.map((item) => (
                <SingleItem key={item.id} id={item.id} task={item.task} date={item.date} DeleteClick={DeleteClick} />
            ))}
        </>
    );
};

export default ShowTodoData;
