import React, { useState, useEffect } from 'react';
import './index.css';

const ListComp = (props) => {
console.log(props);
    return (
        <div className="listContainer">
            <div className="listLeft">
                <p>{props.data.label}</p>
                {/* <p>{props.data.location}</p>
                <p>{props.data.date}</p> */}
            </div>
            <div className="listRight">
                <button id="loadbtn">Load</button>
            </div>
        </div>
    );
}

export default ListComp;