import React from 'react';
import './index.css';

const StarRating = (props) => {
    const activeWidth = (props.rate / 5) * 100;
    return (
        <span className="star-score">
            <div className="score-wrap">
                <span className="stars-active" style={{ width: `${activeWidth}%` }}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <span className="stars-inactive">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>
            </div>
        </span>
    )
}
export default StarRating