import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function More() {
  const [details, setDetails] = useState([]);
    const {id} = useParams()
  useEffect(() => {
    async function getMoreData() {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`
        );
        if (response.data.Response === "False") {
          throw new Error(response.data.Error);
        }
        setDetails(response.data);
        
      } catch (err) {
        console.error(err);
      }
    }

    getMoreData();
  }, [details]);

  return (<>
  {details ? <article className="moreFilm">
        
        <img src={details.Poster} alt="" />

        <div className="div">
          <article className="plot">
            <h2>{details.Title}</h2>
            <p>{details.Plot}</p>
          </article>
          <article className="datas">
            <p>Year: {details.Year}</p>
            <p>Released: {details.Released}</p>
            <p>Runtime: {details.Runtime}</p>
            <p>Genre: {details.Genre}</p>
            <p>Director: {details.Director}</p>
            <p>Writer: {details.Writer}</p>
            <p>Country: {details.Country}</p>
            <Link className="button" to={'/'}>Back</Link>
          </article>
        </div>
    
  </article> : ""}
  
  </>
    
  );
}
