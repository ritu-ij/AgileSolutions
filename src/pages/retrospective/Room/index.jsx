import React from 'react';
import RetroCol from '../../../components/Retro-col';
import DefaultContent from './content.json';
import './index.css';

const RetroRoom = (props) => {
    const {history}  = props;
    const createRetroSession = (event) => {
        if (event) {
            event.stopPropagation();
        }
        history.replace(`/Retrospective/Session/${props.match.params.id}`)
    }

    return (
        <div id="container">
            <header>
                <h1 className="new-retro-title">{props.match.params.id} Retro</h1>
            </header>
            <div id="track-progress">
                <RetroCol edit={true} DefaultContent={DefaultContent}/>
            </div>
            <button id="create-room" onClick={(event) => { createRetroSession(event) }}>Create Room</button>
        </div>
    )
}
export default RetroRoom;