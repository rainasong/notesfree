import './App.css';
import Homepage from "./components/homepage";
import MeetingPage from "./components/meetingPage";
import ReviewPage from "./components/reviewPage";
import KeywordPage from "./components/keywordPage";
import SummaryPage from "./components/summaryPage";
import PieChartPage from "./components/pieChartPage";
import Navbar from "./components/navbar/navbar";
import React from 'react'


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/meeting" component={MeetingPage}/>
                    <Route path="/review" component={ReviewPage}/>
                    <Route path="/keyword" component={KeywordPage}/>
                    <Route path="/summary" component={SummaryPage}/>
                    <Route path="/pieChart" component={PieChartPage}/>
                </Switch>
            </div>
        </Router>
    </div>  
  );
}

export default App;