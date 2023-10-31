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
  const onChange = () => {
    setLoading();
  };
  return (
    <div>
      {loading ? (
        <h1>Loading... </h1>
      ) : (
        <div>
          {" "}
          {movies.map((i) => (
            <div key={i.id}>{i.title}</div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
