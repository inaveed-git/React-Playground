import SingleUser from './SingleUser';

const AllUserDate = ({ users }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 w-fit">
            {users.map((user, index) => (
                <SingleUser key={index} user={user} />
            ))}
        </div>
    );
};

export default AllUserDate;
