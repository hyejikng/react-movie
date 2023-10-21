import { useState, useEffect } from 'react';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h2>false</h2>}
      <div>
        {movies.map((item) => (
          <div key={item.id}>
            <img src={item.medium_cover_image} />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
              {item.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
