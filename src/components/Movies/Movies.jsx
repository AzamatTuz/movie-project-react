import { Link } from "react-router-dom";

export default function Movies({ movies, getId }) {
  return (
    <>
      <section>
        {movies && movies.map((m) => (
          <article className="movieCard" key={m.imdbID}>
            <img src={m.Poster} alt="" />
            <h2>{m.Title}</h2>
            
            <Link className="button" onClick={() => getId(m.imdbID)} to={`/${m.imdbID}`} key={m.imbID}>View More</Link>
          </article>
        )) || ""}
      </section>
    </>
  );
}
