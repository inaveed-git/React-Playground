import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        My React App
      </Link>
      <ul className="flex flex-wrap space-x-6">
        {[
          { to: "/clock", label: "Clock" },
          { to: "/map", label: "Map" },
          { to: "/itemsupplier", label: "Item Supplier" },
          { to: "/datasupplier", label: "Data Supplier" },
          { to: "/calculator", label: "Calculator" },
          { to: "/forms", label: "Forms" },
          { to: "/notetaking", label: "Note Taking" },
          { to: "/shoppingcart", label: "Shopping Cart" },
          { to: "/social", label: "Social Media" },
        ].map((item, index) => (
          <li
            key={index}
            className="relative group bg-white text-blue-500 rounded-md p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4"
          >
            <Link
              to={item.to}
              className="block hover:text-blue-700 transition-colors duration-300"
            >
              {item.label}
            </Link>
            <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full w-0"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
