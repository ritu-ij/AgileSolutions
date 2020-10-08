import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import RetroCol from '../../../components/Retro-col';
import DefaultContent from './content.json';
import './index.css';

const RetrospectiveNew = (props) => {
    //const { content } = props;
    let col_data = {};
    const [state, setState] = useState({ boards: { ...col_data } });
    useEffect(() => {
        DefaultContent.retro_boards_config.map(item => {
            col_data[item.key] = {
                retros: {},
                counter: 0
            };
        })
        setState({ boards: col_data });
        const pusher = new Pusher('d10973f4aeb6ded3f904', {
            cluster: 'ap2',
            encrypted: true
        });
        const channel = pusher.subscribe('retro-data');
        channel.bind('content', data => {
            console.log("received data");
            console.log(data);
            //console.log(state);
            setState(data);
        });
    }, []);

    const addRetroToBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        if (!item_key) {
            let effective_key = "current" + prev_data.boards[board_key].counter;
            prev_data.boards[board_key]["retros"][effective_key] = {
                content: "",
                edit: true
            }
            prev_data.boards[board_key].counter += 1;
            setState(prev_data);
        } else {
            let effective_key = item_key;
            prev_data.boards[board_key]["retros"][effective_key] = {
                content: value,
                edit: false
            }
            syncRetroData(prev_data);
        }
    }

    const syncRetroData = (data) => {
        const payload = {
            ...data
        };
        axios.post('/Retrospective/New', payload);
    }

    const delRetroFromBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        let effective_key = item_key;
        delete prev_data.boards[board_key]["retros"][effective_key]
        prev_data.boards[board_key].counter -= 1;
        syncRetroData(prev_data);
    }
    
    const editRetroInBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        let effective_key = item_key;
        prev_data.boards[board_key]["retros"][effective_key].edit = true;
        setState(prev_data);
    }

    const updateHI = (event) => {
        if (event) {
            event.stopPropagation();
            if (event.which == 13) {
                let val = event.target.value;
                if (val >= 0 && val <= 5) {
                    alert(val);
                } else {
                    event.target.value = null;
                }
            }
        }
    }

    return (
        <div id="container">
            <header>
                <h1 className="new-retro-title">{props.match.params.id} Retro

                </h1>
                <div className="new-retro-index">Happiness Index:
                <span>
                        <input type="number" name="hpyIdx" title="Please select a value between 0 and 5" min={0} max={5} onKeyPress={(ev) => { updateHI(ev) }} />
                    </span> / 5
                </div>
            </header>

            <div id="track-progress">
                <RetroCol edit={false} DefaultContent={DefaultContent} {...state}
                    addRetroToBoard={addRetroToBoard}
                    delRetroFromBoard={delRetroFromBoard}
                    editRetroInBoard={editRetroInBoard} />
            </div>
        </div>
    )
}
export default RetrospectiveNew;