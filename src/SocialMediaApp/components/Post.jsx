import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import { PostList } from "../store/Post-List-Store";

const Post = ({ post }) => {
  const { deleteList } = useContext(PostList);

  // Fallback handling: check for `reactions` object or `reaction` field
  const reactionCount = post.reactions?.likes || post.reaction || 0;

  // const handleDelete = async (postId) => {
  //     try {
  //         // Delete the post from the API
  //         await axios.delete(`https://dummyjson.com/posts/${postId}`);

  //         // After successful deletion from the API, remove it from the local state
  //         deleteList(postId);
  //     } catch (error) {
  //         console.error("Error deleting the post:", error);
  //     }
  // };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md mb-4">
      <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        <MdDelete onClick={() => deleteList(post.id)} />
      </span>

      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
      <div className="flex flex-wrap mt-4">
        {post.tags &&
          post.tags.map((tag, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </button>
          ))}
      </div>

      <div
        className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          The post has reached:
          <strong className="font-bold"> {reactionCount} </strong> reactions
        </span>
      </div>
    </div>
  );
};

export default Post;
