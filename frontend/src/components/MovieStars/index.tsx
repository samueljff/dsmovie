import {ReactComponent as StarFull} from  'Assets/IMG/star-full.svg';
import {ReactComponent as StarHalf} from  'Assets/IMG/star-half.svg';
import {ReactComponent as StarEmpty} from  'Assets/IMG/star-empty.svg';
import './styles.css';
import { type } from 'os';

type props = {
  score: number;
}

type StarProps = {
  fill: number;
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

  function Star({fill}: StarProps){
    // eslint-disable-next-line eqeqeq
    if(fill==0){
      return <StarEmpty/>
    // eslint-disable-next-line eqeqeq
    }else if(fill==1){
      return <StarFull/>
    }else{
      return <StarHalf/>
    }

    }

function MovieStars({score}: props) {
  const Fills = getFills(score);
    return (
        <div className="dsmovie-stars-container">
            <Star fill={Fills[0]} />
            <Star fill={Fills[1]}/>
            <Star fill={Fills[2]}/>
            <Star fill={Fills[3]}/>
            <Star fill={Fills[4]}/>
        </div>
    );
}

export default MovieStars;