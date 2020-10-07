import React, { useState, useEffect } from 'react';
import RetroCol from '../../../components/Retro-col';
import DefaultContent from './content.json';
import './index.css';

const RetrospectiveNew = (props) => {
    //const { content } = props;
    let col_data = {};
    const [state, setState] = useState({ boards: { ...col_data } });
    useEffect(() => {
        Object.keys(DefaultContent.retro_boards_config).map(item => {
            col_data[item] = {
                retros: {},
                counter: 0
            };
        })
        setState({ boards: col_data });
    }, []);

    const addRetroToBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        if (!item_key) {
            prev_data.boards[board_key]["retros"]["current"] = {
                content: "",
                edit: true
            }
        } else {
            let effective_key = item_key;
            if (item_key === "current") {
                effective_key = "retro" + prev_data.boards[board_key].counter;
                delete prev_data.boards[board_key]["retros"][item_key];
            }
            prev_data.boards[board_key]["retros"][effective_key] = {
                content: value,
                edit: false
            }
            prev_data.boards[board_key].counter += 1;
        }
        setState(prev_data);
    }

    const delRetroFromBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        let effective_key = item_key;
        delete prev_data.boards[board_key]["retros"][effective_key]
        prev_data.boards[board_key].counter -= 1;
        setState(prev_data);
    }
    const editRetroInBoard = (board_key, item_key, value) => {
        let prev_data = { ...state };
        let effective_key = item_key;
        prev_data.boards[board_key]["retros"][effective_key].edit = true;
        setState(prev_data);
    }

    return (
        <div id="container">
            <header>
                <h1 className="new-retro-title">{props.match.params.id} Retro

                </h1>
                <div className="new-retro-index">Happiness Index:
                <span>
                        <input type="number" name="hpyIdx" min={0} max={5} /></span> / 5
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