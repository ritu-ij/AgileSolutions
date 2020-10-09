import React from 'react';
import StarRating from '../Star-rating';
import './index.css';

const TableRow = (props) => {
    const { rowData, history } = props;
    const showDetails = (event, item) => {
        if (event) {
            event.stopPropagation();
        }
        alert(item);
    }
    const formatDate = (val) => {
        let date = new Date(val);
        return date.toLocaleString('default', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    const createRetro = (event, sprint) => {
        if (event) {
            event.stopPropagation();
        }
        history.replace(`/Retrospective/Room/${sprint}`);
    }

    const joinRetro = (event, sprint) => {
        if (event) {
            event.stopPropagation();
        }
        history.replace(`/Retrospective/Session/${sprint}`);
    }

    const formatDetailedReports = (val, createNew) => {
        if (val) {
            return (<span className={'text-link'} onClick={(event) => { showDetails(event, val) }}>View</span>)
        } else {
            if (createNew) {
                if (localStorage.getItem(rowData["Sprint"])) {
                    return (<span className={'text-link'} onClick={(event) => { joinRetro(event, rowData["Sprint"]) }}>Join</span>)
                } else {
                    return (<span className={'text-link'} onClick={(event) => { createRetro(event, rowData["Sprint"]) }}>Create New</span>)
                }
            }
            return (<span>NA</span>)
        }
    }

    return (
        <div className={'table-row'}>
            <div className={'row-item'}>{rowData["Sprint"]}</div>
            <div className={'row-item'}>{rowData["Velocity"]}</div>
            <div className={'row-item'}>{rowData['Scope Changes']}</div>
            <div className={'row-item'}>{formatDate(rowData["Completed Date"])}</div>
            <div className={'row-item'}>{formatDetailedReports(rowData["Sprint Report"], false)}</div>
            <div className={'row-item'}>{formatDetailedReports(rowData["Retro Inputs"], true)}</div>
            <div id="row-rating" className={'row-item'} title={`${rowData["Happiness Index"]} out of 5`}>{<StarRating rate={rowData["Happiness Index"]} />}</div>
        </div>
    )
}
export default TableRow;