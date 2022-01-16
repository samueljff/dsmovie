import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utis/requests";

function Listing() {
    
    //Forma errada
    
    axios.get(`${BASE_URL}/Movie?size=12&page=2`)
        .then(Response =>{
            console.log(Response.data)
        });

    return (
        <>
            <div className="container">
                <Pagination />
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                    <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;