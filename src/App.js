import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <div>
          {" "}
          {movies.map((i) => (
            <div key={i.id}>
              <h1>{i.title}</h1>
              <img alt="Movie Poster" src={i.medium_cover_image} />
              <ul>
                {i.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p>Year released: {i.year}</p>
              <p>
                Rate: <strong>{i.rating}</strong>
              </p>
              <p>
                Runtime:<strong> {i.runtime}</strong>
              </p>
              <p>
                Summary:{" "}
                <strong>{i.summary === true ? "N/A" : i.summary}</strong>
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
