import FormCard from 'components/FormCard';
import {useParams } from 'react-router-dom';

function Form( ) {

    const Params = useParams();
    return(
        < FormCard movieId={`${Params.movieId}`} />
    );
    
}

export default Form;