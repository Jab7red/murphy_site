//Import Route/Switch
import { Route, Switch, Redirect } from "react-router-dom";

//Import Pages
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";



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
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    )
};

export default Main;