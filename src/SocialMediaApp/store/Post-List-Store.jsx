import axios from "axios";
import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  loader: false,
  addList: () => {},
  deleteList: () => {},
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "add_List":
      return [action.payload.newPost, ...currPostList];
    case "delete_List":
      return currPostList.filter((post) => post.id !== action.payload.postId);
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [loader, setLoader] = useState(false);

  // Add new post to the list
  const addList = useCallback(
    (newPost) => {
      dispatchPostList({ type: "add_List", payload: { newPost } });
    },
    [dispatchPostList]
  );

  // Delete a post from the list
  const deleteList = useCallback(
    (postId) => {
      dispatchPostList({ type: "delete_List", payload: { postId } });
    },
    [dispatchPostList]
  );

  // Fetch data from the API
  const getdata = useCallback(
    async (signal) => {
      try {
        setLoader(true); // Start loading
        const response = await axios.get("https://dummyjson.com/posts", {
          signal,
        });

        // Add each post to the list
        response.data.posts.forEach((post) => addList(post));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching posts:", error.message);
        }
      } finally {
        setLoader(false); // Stop loading regardless of success or failure
      }
    },
    [addList]
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getdata(signal);

    return () => {
      console.log("Request aborted");
      controller.abort();
    };
  }, [getdata]);

  return (
    <PostList.Provider value={{ postList, addList, deleteList, loader }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
