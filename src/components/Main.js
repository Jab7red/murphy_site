//Import Route/Switch
import { Route, Switch, Redirect } from "react-router-dom";

//Import Pages
import Home from "../pages/Home/Home";



const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"></Redirect>
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}