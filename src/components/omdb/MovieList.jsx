import { useOutletContext } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const navigate = useNavigate();
  const [apiError, moviesList] = useOutletContext();

  return (
    <div id="contact">
      <div className="row w-100 my-3">
        {apiError == "" ? (
          moviesList.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 p-2" key={item.imdbID}>
                <Card>
                  <Card.Img
                    className="card-image p-2"
                    variant="top"
                    src={item.Poster}
                  />
                  <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>{item.Year}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate(`/${item.imdbID}/${item.Title}/details`);
                      }}
                    >
                      More Details {" >>"}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <div className="text-center text-danger">{apiError.message}</div>
        )}
      </div>
    </div>
  );
}
