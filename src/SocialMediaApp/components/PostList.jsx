import { useCallback, useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/Post-List-Store";
import Post from "./Post";
import IfNoPost from "./IfNoPost";
import axios from "axios";
import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

const PostList = () => {
  const { postList, loader } = useContext(PostListData);

  return (
    <>
      {loader && <Loader />}
      {!loader && postList.length === 0 && <IfNoPost />}
      {!loader && postList.map((post) => <Post key={uuidv4()} post={post} />)}
    </>
  );
};

export default PostList;
