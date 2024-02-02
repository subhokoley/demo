import { createContext, useReducer } from "react";

export const PostItemFromContext = createContext({
  postItem: [],
  addFromServer: () => {},
});

const reducerFunction = (current, action) => {
  let posts = current;
  if (action.type === "ADD_SERVER_ITEM") {
    posts = action.payload.post;
  }
  return posts;
};

const PostItemProvider = ({ children }) => {
  const [postItem, dispatch] = useReducer(reducerFunction, []);

  const addFromServer = (posts) => {
    dispatch({
      type: "ADD_SERVER_ITEM",
      payload: {
        post: posts,
      },
    });
  };

  return (
    <PostItemFromContext.Provider
      value={{
        postItem: postItem,
        addFromServer: addFromServer,
      }}
    >
      {children}
    </PostItemFromContext.Provider>
  );
};
export default PostItemProvider;
