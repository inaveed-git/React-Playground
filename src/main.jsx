import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./SocialMediaApp/components/CreatePost.jsx";
import SocialMediaApp from "./SocialMediaApp/SocialMediaApp.jsx";
import PostList from "./SocialMediaApp/components/PostList.jsx";
import ClockApp from "./AfghanistanClock/ClockApp.jsx";
import MainContainer from "./Calculator/MainContainer.jsx";

import MainForm from "./Forms/MainForm.jsx";
import ItemSupplier from "./LearningPros/ItemSupplier.jsx";
import MapPractice from "./LeraningMap/MapPractice.jsx";
import NoteApp from "./NoteTakingContext/NoteApp.jsx";
import ShoppingCart from "./ShoppingCart/CartApp.jsx"; // Updated path for Shopping Cart

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/social",
    element: <SocialMediaApp />,
    children: [
      { path: "/social", element: <PostList /> }, // Default child route
      { path: "/social/create", element: <CreatePost /> },
    ],
  },
  { path: "/clock", element: <ClockApp /> },
  { path: "/map", element: <MapPractice /> },
  { path: "/itemsupplier", element: <ItemSupplier /> }, // Fixed path

  { path: "/calculator", element: <MainContainer /> },
  { path: "/notetaking", element: <NoteApp /> },
  { path: "/shoppingcart", element: <ShoppingCart /> }, // Corrected component
  { path: "/forms", element: <MainForm /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
