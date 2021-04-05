import React, { useState, useEffect } from 'react';
import './index.css';
import {Link} from "react-router-dom";
import ListComp from './listComp';

const Homepage = () => {
    const [meetingTitle, setMeetingTitle] = useState('');

    useEffect(() => {
        setMeetingTitle("Alice's Meeting List");
    }, [])

    return (
        <div>
            <h1 style={{color: 'white'}}>{meetingTitle}</h1>
            <button id="btn">
                <Link to="/meeting" id="link">NEW MEETING</Link>
            </button>
            <ListComp data={
               { label: 'New meeting1',
                location:'143-244',
                date:'2021-03-21'}
            }/>
            <ListComp data={
               { label: 'New meeting2',
                location:'143-244',
                date:'2021-03-21'}
            }/>
            <ListComp data={
               { label: 'New meeting3',
                location:'143-244',
                date:'2021-03-21'}
            }/>
            <ListComp data={
               { label: 'New meeting4',
                location:'143-244',
                date:'2021-03-21'}
            }/>
        </div>
    );
}

export default Homepage;
