// url 동적 변수를 가져오는 함수 useParams {변수명 : xxx}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  // await는 async 함수 async () => {} 안에 있어야 함.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      <p>{movie.title}</p>
      <p>{movie.genres}</p>
    </div>
  );
}
export default Detail;
