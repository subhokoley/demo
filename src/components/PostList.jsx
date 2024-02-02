import { useContext, useState } from "react";
import PostItem from "./PostItem";
import { PostItemFromContext } from "../store/Post-item-data";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpiner from "./LoadingSpiner";

const PostList = ({ summeryClick }) => {
  const { postItem, addFromServer } = useContext(PostItemFromContext);
  const [fatching, setFatching] = useState(false);
  const [query, setQuery] = useState("");

  const searchMovies = (searchItems) => {
    setQuery(searchItems);
    setFatching(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((post) => {
        try {
          addFromServer(post);
          setFatching(false);
        } catch (error) {
          console.log("Got an Error", error);
        }
      });
  };
  return (
    <>
      {fatching && <LoadingSpiner></LoadingSpiner>}
      {!fatching && postItem.length === 0 && (
        <WelcomeMessage searchMovies={searchMovies}></WelcomeMessage>
      )}
      <div className="totalMovies">
        {!fatching &&
          postItem.map((item) => {
            return (
              <PostItem
                summeryClick={summeryClick}
                key={item.show.id}
                name={item.show.name}
                type={item.show.type}
                language={item.show.language}
                image={item.show.image.medium}
                item={item}
              ></PostItem>
            );
          })}
      </div>
    </>
  );
};
export default PostList;
