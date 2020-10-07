import React from 'react';
import content from './content.json';
import './index.css';

const RetroItem = (props) => {
    const { data, colorKey, dataKey, parentKey } = props;
    console.log(data);

    const updateRetroItem = (event, item_key) => {
        let val = null;
        if (event) {
            event.stopPropagation();
            if (event.which == 13) {
                val = event.target.value;
                props.updateItem(dataKey, val, parentKey);
            }
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
        </section>
    )
}
export default RetroItem;