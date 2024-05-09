import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find(m => m.id.toString() === movieId);

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    );
};

export default MovieDetails;