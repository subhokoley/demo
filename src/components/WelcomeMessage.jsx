import { useRef } from "react";
const WelcomeMessage = ({ searchMovies }) => {
  const search = useRef("");
  const handelSearch = (e) => {
    e.preventDefault();
    const searchItems = search.current.value;
    search.current.value = "";
    searchMovies(searchItems);
  };
  return (
    <>
      <center className="welcome-message">
        <h2>Search Movies</h2>
        <form
          onSubmit={(e) => {
            handelSearch(e);
          }}
        >
          <div className="mb-3">
            <input
              ref={search}
              placeholder="Search your movies"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-search">
            Search
          </button>
        </form>
      </center>
    </>
  );
};
export default WelcomeMessage;
