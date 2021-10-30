import { Contact } from "./contact";
import { Intro } from "./intro";
import { Nav } from "./nav";
import { Work } from "./projects";
import { Skills } from "./skills";
import { Route, Switch } from "react-router";


export function Portfolio() {
    return (
        <div >
            <Nav />
            <Switch>
            <Route exact path="/">
                <Intro />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="/work">
                <Work />
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            </Switch>
        </div>
    )
}