import MainNav from "../MainNav"; // Import the Navbar component

import ClockApp from "./AfghanistanClock/ClockApp";
import MapPractice from "./LeraningMap/MapPractice";
import ItemSupplier from "./LearningPros/ItemSupplier";
import DataSupplier from "./TodoListProps/DataSupplier";
import MainContainer from "./Calculator/MainContainer";
import MainForm from "./Forms/MainForm";
import NoteApp from "./NoteTakingContext/NoteApp";
import CartApp from "./ShoppingCart/CartApp";
import SocialMediaApp from "./SocialMediaApp/SocialMediaApp";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
      {/* Navbar Section */}
      <MainNav /> {/* Add the Navbar here */}
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow-md">
          Welcome to My React App
        </h1>
        <p className="text-2xl text-gray-600 font-light tracking-wide">
          A collection of various components and exercises
        </p>
      </header>
      {/* Featured Section */}
      <section className="flex justify-center mb-12">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl">
          <ClockApp />
        </div>
      </section>
      {/* Components Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-105">
          <MapPractice />
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-105">
          <ItemSupplier />
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 transition-transform hover:scale-105">
          <DataSupplier />
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 col-span-full transition-transform hover:scale-105">
          <MainContainer />
        </div>
      </section>
      {/* Form Section */}
      <section className="bg-white rounded-lg shadow-xl p-10 mt-16 w-full max-w-4xl mx-auto transition-transform hover:scale-105">
        <MainForm />
      </section>
      {/* Note Taking Section */}
      <section className="bg-white rounded-lg shadow-xl p-10 mt-16 w-full max-w-4xl mx-auto transition-transform hover:scale-105">
        <NoteApp />
      </section>
      {/* Shopping Cart Section */}
      <section className="bg-white rounded-lg shadow-xl p-10 mt-16 w-full max-w-4xl mx-auto transition-transform hover:scale-105">
        <CartApp />
      </section>
      {/* Social Media App Section */}
      <section className="bg-white rounded-lg shadow-xl p-10 mt-16 max-w-4xl h-fit mx-auto">
        <SocialMediaApp />
      </section>
    </div>
  );
}

export default App;
