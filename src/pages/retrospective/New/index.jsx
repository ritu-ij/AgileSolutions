import React from 'react';
import TableRowHead from '../../../components/table/rowHead';
import TableRow from '../../../components/table/row';
import Tracker from '../../../components/tracker-box'
import './index.css';

const RetrospectiveNew = (props) => {
    const { content } = props;
    return (
        <div id="container">
            <header>
                <h1 className="new-retro-title">{props.match.params.id} Retro
                
                </h1>
                <div className="new-retro-index">Happiness Index:
                <span>
                <input type="number" name="hpyIdx" min={0} max={5}/></span> / 5
                </div>
            </header>
           
            <div id="track-progress">
               
        </div>
        </div>
    )
}
export default RetrospectiveNew;