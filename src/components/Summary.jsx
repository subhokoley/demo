import { useEffect, useState } from "react";

const Summary = ({ item }) => {
  const [formDetails, setFormDetails] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");

  const stroge = window.localStorage;

  useEffect(() => {
    stroge.setItem("name", name);
    stroge.setItem("email", email);
    stroge.setItem("quantity", quantity);
  }, [name, email, quantity]);

  const handelFormDetails = () => {
    setFormDetails(true);
  };
  return (
    <>
      <div className="card mb-3 summaryTemplate" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${item.show.image.medium}`}
              className="img-fluid rounded-start summaryImage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="cardTitle">
                <strong>Name:</strong> <span>{`${item.show.name}`}</span>
              </h6>
              <h6 className="cardTitle">
                <strong>Type:</strong> <span>{`${item.show.type}`}</span>
              </h6>
              <h6 className="cardTitle">
                <strong>Language:</strong>
                <span>{` ${item.show.language}`}</span>
              </h6>
              <h6 className="cardTitle">
                <strong>Rating:</strong>
                <span>{` ${item.show.rating.average}`}</span>
              </h6>
              <p className="card-text">
                <strong>Summary:</strong> <span>{`${item.show.summary}`}</span>
              </p>
              <a
                className="btn btn-primary linkBtn"
                href={`${item.show.url}`}
                role="button"
              >
                Website Link
              </a>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handelFormDetails}
              >
                Book Movie Tickets
              </button>

              {formDetails && (
                <form className="formSection">
                  <h3>Book Your Tickets</h3>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Movie Name
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={`${item.show.name}`}
                      className="form-control formInput"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="form-control formInput"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="form-control formInput"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Quantity
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      className="form-control formInput"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
