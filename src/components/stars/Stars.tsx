import Star from '../star/star';
import './Stars.css';

interface Count {
    count : number;
}

export default function Stars({ count = 0}: Count) {
    let result: JSX.Element[] = [];
    if (count >= 1 && count <= 5) {
        let index: number = 0;
        for (let i: number = 0; i < Math.floor(count); i++) {
            result.push(<li key={index++}><Star /></li>);
        }
    }
    return (
        <div className='card'>
            {count >= 1 && count <= 5 ? <ul className="card-body-stars u-clearfix">{result}</ul> : ''}
        </div>
    );
}