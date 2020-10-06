import React from 'react';
import './index.css';

const Tracker = (props) => {

    return (
        <div className="tracker-container">
            <h3 className="tracker-head">
                {props.head}
            </h3>
            <div className="tracker-list">
                <div className="scroll-list">{
                    props.content.map((item, key) => {
                        return (
                            <div className="tracking-item">
                                <input type="checkbox" />
                                <span>{item}</span>
                                </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Tracker