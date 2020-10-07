import React from 'react';
import RetroItem from '../Retro-item';
import './index.css';

const RetroCol = (props) => {
    const { edit, DefaultContent, boards } = props;

    const delBoard = (key) => {
        if (DefaultContent[key]) {
            DefaultContent[key] = null;
        }
    }

    const addRetroInput = (event, board_key) => {
        if (event) {
            event.stopPropagation();
        }
        props.addRetroToBoard(board_key, null, null);
    }
    const updateItem = (item_key, value, board_key) => {
        props.addRetroToBoard(board_key, item_key, value);
    }
    return (
        <section className="retro-col-container">
            {DefaultContent && Object.keys(DefaultContent.retro_boards_config).map((item, keyParent) => {
                return (
                    <div className="retro-col" key={item}>
                        <div className="retro-col-header">
                            <span>{DefaultContent.retro_boards_config[item]}</span>
                            {edit ? <div className="edit-actions"></div> : <span className="add-retro-item" onClick={(event) => { addRetroInput(event, item) }}>    Add</span>}
                        </div>
                        <div className="retro-inputs-container">
                            {!edit ?
                                boards && boards[item] && Object.keys(boards[item]["retros"]).map((retro, key) => {
                                    return (
                                        <RetroItem data={boards[item]["retros"][retro]} parentKey={item} dataKey={retro} key={key} colorKey={keyParent} updateItem={updateItem} />
                                    )
                                })
                                : null}
                        </div>
                    </div>
                )
            })
            }
        </section>
    )
}
export default RetroCol;