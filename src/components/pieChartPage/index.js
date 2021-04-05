import React, { useState, useEffect } from 'react';
import PieChart from './pieChart';
import './index.css';
// import avatar from '../../../public/_assets/icon-a.png';
import * as config from '../_constants/config';

const PieChartPage = () => {
    const [pieData, setPieData] = useState('hello');
    const [pieIndex, setPieIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        setTitle('Productivity Application Brainstorm');
        setUsername('Japan Xinchipa');
    }, [])

    const showKeywords = (data, index) => {
        setPieData(data);
        setPieIndex(index);
    }
    console.log(pieData, pieIndex);

    return (
        <div className="container">
            <div className="pieChart">
                <h1 id="title">{title}</h1>
                <PieChart data={{pieData, showKeywords}}/>
            </div>
            <div id="space"></div>
            <div className="keywords">
                <div className="topKeywords">
                    <div className="avatar">
                        <img src={config.placeholder[pieIndex].image} id="avatarPic"/>
                    </div>
                    <div className="pieData">
                        <h3 id="username">{config.placeholder[pieIndex].label}</h3>
                        <div id="keyParagrah">{config.placeholder[pieIndex].data}</div>
                    </div>
                    
                </div>
                {/* <div className="bottomKeywords">
                    bottom
                </div> */}
            </div>
        </div>
    );
}

export default PieChartPage;
