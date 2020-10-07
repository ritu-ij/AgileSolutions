import React from 'react';
import content from './content.json';
import './index.css';

const RetroItem = (props) => {
    const { data, colorKey, dataKey, parentKey } = props;
    console.log(data);

    const updateRetroItem = (event) => {
        let val = null;
        if (event) {
            event.stopPropagation();
            if (event.which == 13) {
                val = event.target.value;
                props.updateItem(dataKey, val, parentKey);
            }
        }
    }

    const deleteRetroItem = (event) => {
        let val = null;
        if (event) {
            event.stopPropagation();
            val = event.target.value;
            props.deleteItem(dataKey, val, parentKey);
        }
    }

    const editRetroItem = (event) => {
        let val = null;
        if (event) {
            event.stopPropagation();
            props.editItem(dataKey, val, parentKey);
        }
    }
    return (
        <section className="retro-item-container" style={{ backgroundColor: `${content.boardColors[colorKey]}` }}>
            <div className="retro-content">
                {
                    data.edit ?
                        <input type="text" defaultValue={data.content} className="retro-input" onKeyPress={(ev) => { updateRetroItem(ev) }} />
                        : data.content
                }
            </div>
            <div className="retro-item-actions">
                {
                    !data.edit ?
                        <span className="retro-item edit-retro-item" onClick={(ev) => { editRetroItem(ev) }}>Edit</span>
                        : null
                }
                <span className="retro-item del-retro-item" onClick={(ev) => { deleteRetroItem(ev) }}>Delete</span>
            </div>
        </section>
    )
}
export default RetroItem;