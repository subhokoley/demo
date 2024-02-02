const PostItem = ({ name, item, type, language, image, summeryClick }) => {
  return (
    <div className="moviesCard">
      <div className="cardImg">
        <img src={`${image}`} className="moviesImg" alt="..." />
      </div>
      <div className="singleMovies">
        <h6 className="cardTitle">
          <strong>Name:</strong> <span>{name}</span>
        </h6>
        <h6 className="cardTitle">
          <strong>Type:</strong> <span>{type}</span>
        </h6>
        <h6 className="cardTitle">
          <strong>Language:</strong> <span>{language}</span>
        </h6>
        <button
          type="button"
          className="btn btn-primary summeryBtn"
          onClick={(e) => summeryClick(e, item)}
        >
          Get Summary
        </button>
      </div>
    </div>
  );
};
export default PostItem;
