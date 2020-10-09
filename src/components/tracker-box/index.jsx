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
                        let checked = {};
                        if (props.defaultChecked) {
                            checked = { checked: props.defaultChecked }
                        }
                        return (
                            <div className="tracking-item" key={key}>
                                <input type="checkbox" {...checked} />
                                <span>{item}</span>
                                {/* <span className="completiontime">Completed on Sept 20, 2020</span> */}
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