import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Signup from "./signup/signup";
import Login from "./login/login";
import Youtube from "./youtube/youtube";
/*
import 'bootstrap/dist/css/bootstrap.min.css';
*/

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Youtube}/>
            </Switch>
        </Router>
    )
}

export default App;