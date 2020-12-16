
import React, { useState,useEffect  } from 'react';
import {useParams} from "react-router-dom";
function MovieDetail() {
  const { category } = useParams();
  const [movie, setMovie] = useState({})
  useEffect(() => {
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then(res => res.json())
          .then(
              (result) => {
                  setMovie(result);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                  this.setState({

                  });
              }
          )
  },[category])
  return (
      <div>
          <div className="card">
              <div className="card-content">
                  <p className="title">
                      {movie.value}
                  </p>
                  <p className="subtitle">
                      Jeff Atwood
                  </p>
              </div>
              <footer className="card-footer">
                  <p className="card-footer-item">
                      <span>
                          View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                      </span>
                  </p>
                  <p className="card-footer-item">
                      <span>
                          Share on <a href="https://facebook.com">Facebook</a>
                      </span>
                  </p>
              </footer>
          </div>
      </div>
  );

}
export default MovieDetail;
