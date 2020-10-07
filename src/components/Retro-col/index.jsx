import React from 'react';
import RetroItem from '../Retro-item';
import content from './content.json';
import './index.css';
import PlusIcon from '../../assets/plus';

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
    const deleteItem = (item_key, value, board_key) => {
        props.delRetroFromBoard(board_key, item_key, value);
    }
    const editItem = (item_key, value, board_key) => {
        props.editRetroInBoard(board_key, item_key, value);
    }
    return (
        <section className="retro-col-container">
            {DefaultContent && Object.keys(DefaultContent.retro_boards_config).map((item, keyParent) => {
                return (
                    <div className="retro-col" key={item}>
                        <div className="retro-col-header">
                            <span>{DefaultContent.retro_boards_config[item]}</span>
                            {edit ? <div className="edit-actions"></div> : <span className="add-retro-item" onClick={(event) => { addRetroInput(event, item) }}>
                                <PlusIcon backgroundColor={content.boardColors[keyParent]} />
                            </span>}
                        </div>
                        <div className="retro-inputs-container">
                            {!edit ?
                                boards && boards[item] && Object.keys(boards[item]["retros"]).map((retro, key) => {
                                    return (
                                        <RetroItem data={boards[item]["retros"][retro]} parentKey={item} dataKey={retro} key={key} colorKey={keyParent}
                                            updateItem={updateItem}
                                            deleteItem={deleteItem}
                                            editItem={editItem} />
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