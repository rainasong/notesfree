import './App.css';
import Homepage from "./components/homepage";
import MeetingPage from "./components/meetingPage";
import ReviewPage from "./components/reviewPage";
import KeywordPage from "./components/keywordPage";
import SummaryPage from "./components/summaryPage";
import PieChartPage from "./components/pieChartPage";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Grid} from "@material-ui/core"
import { Bar, Pie } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Grid container direction='column'>
                  <Header/>
                  <Switch>
                      <Route path="/" exact component={Homepage}/>
                      <Route path="/meeting" component={MeetingPage}/>
                      <Route path="/review" component={ReviewPage}/>
                      <Route path="/keyword" component={KeywordPage}/>
                      <Route path="/summary" component={SummaryPage}/>
                      <Route path="/pieChart" component={PieChartPage}/>
                  </Switch>
                </Grid>
            </div>
        </Router>
    </div>
  );
}

export default App;
