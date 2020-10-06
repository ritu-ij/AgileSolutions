import React from 'react';
import './index.css';

const TableRowHead = (props) => {
    const { rowData } = props;
    return (
        <div className={'table-row-head'}>
            {Object.keys(rowData).map((item, key) => {
                return (
                    <div className={'row-head-item'} key={`row-head-${key}`}>{item}</div>
                )
            })
            }
        </div>
    )
}
export default TableRowHead;