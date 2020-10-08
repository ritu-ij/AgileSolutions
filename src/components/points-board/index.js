import React from 'react';
import './index.scss';

const PointsBoard = ()=>{
    const points = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

    return(
        <div className="points-table">
            {points.map((o)=><button value={o}>{o}</button>)}
        </div>
    )
}

export default PointsBoard;