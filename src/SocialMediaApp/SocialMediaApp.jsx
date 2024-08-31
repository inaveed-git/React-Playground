// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";
import PostListProvider from "./store/Post-List-Store";
import { Outlet } from "react-router-dom";

// import DataFetchingComponent from './components/DataFetchingComponent';

const SocialMediaApp = () => {
  return (
    <PostListProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 h-fit">
          <Sidebar />
          <main className="flex-1 p-4">
            {/* <CreatePost onSubmit={handleFormSubmit} /> */}
            {/* <CreatePost onSubmit={handleFormSubmit} /> */}

            {/* {seleteTab == "Home" ? <PostList /> : <CreatePost onSubmit={handleFormSubmit} />} */}
            {/* <DataFetchingComponent /> */}

            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </PostListProvider>
  );
};

export default SocialMediaApp;
