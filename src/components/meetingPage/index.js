import React from 'react';
import {Grid} from '@material-ui/core/';

const TextBox = ({text}) => {
    return(
        <Grid item>
            <p>{text}</p>
        </Grid>
    )
}

const MeetingPage = () => {
    return (
        <Grid container 
            direction="row"
            justify="flex-start">
            <Grid container item 
            direction="column">
                <TextBox text="Meeting Title"/>
                <TextBox text="10.30PM on 4/4/2021"/>
            </Grid>
            <Grid container item 
            direction="column">
                <TextBox text="Some component text"/>
                <TextBox text="Example text"/>
            </Grid>

            {/* <ScrollingBox />
            <Card /> */}
        </Grid>
    );
}

export default MeetingPage;
