import { Outlet } from 'react-router-dom';
import MovieNavBar from './MovieNavBar';

const Movies = ({ movies }) => {
    return (
        <div>
            <h1>Movies Component</h1>
            <MovieNavBar movies={movies} />
            {/* nested routes here */}
            <Outlet />
        </div>
    );
};

export default Movies;