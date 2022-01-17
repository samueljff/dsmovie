import { ReactComponent as Arrow } from 'Assets/IMG/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type props = {
    page: MoviePage;
    onchange: Function;
}

function Pagination({ page, onchange }: props) {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button"
                    disabled={page.first} onClick={() => onchange(page.number - 1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button"
                    disabled={page.last} onClick={() => onchange(page.number + 1)}>
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;