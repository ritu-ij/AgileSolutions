import React from 'react';
import RetroItem from '../Retro-item';
import content from './content.json';
import './index.css';
import PlusIcon from '../../assets/plus';

const RetroCol = (props) => {
    const { edit, DefaultContent, boards } = props;

    const delBoard = (event, key) => {
        if (event) {
            event.stopPropagation();
        }
        props.delBoard(key);
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
            {DefaultContent && DefaultContent.retro_boards_config.map((item, keyParent) => {
                return (
                    <div className="retro-col" key={item.key}>
                        <div className="retro-col-header">
                            <span>{item.display}</span>
                            {edit ? <div className="edit-actions">
                                {item.display.length > 0 ? <span className="del-board" onClick={(ev) => { delBoard(ev, item.key) }}>Delete</span> : null}
                            </div> : <span className="add-retro-item" onClick={(event) => { addRetroInput(event, item.key) }}>
                                    <PlusIcon backgroundColor={content.boardColors[keyParent]} />
                                </span>}
                        </div>
                        <div className="retro-inputs-container">
                            {!edit ?
                                boards && boards[item.key] && Object.keys(boards[item.key]["retros"]).map((retro, key) => {
                                    return (
                                        <RetroItem data={boards[item.key]["retros"][retro]} parentKey={item.key} dataKey={retro} key={key} colorKey={keyParent}
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