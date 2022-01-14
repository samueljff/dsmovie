import {ReactComponent as StarFull} from  'Assets/IMG/star-full.svg';
import {ReactComponent as StarHalf} from  'Assets/IMG/star-half.svg';
import {ReactComponent as StarEmpty} from  'Assets/IMG/star-empty.svg';
import './styles.css';
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;