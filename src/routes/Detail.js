import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  //   console.log(id);
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <h2>Detail</h2>
      <div>{details.year}</div>
    </div>
  );
}

export default Detail;
