import { Contact } from "./contact";
import { Intro } from "./intro";
import { Nav } from "./nav";
import { Work } from "./projects";
import { Skills } from "./skills";


export function Portfolio() {
    return (
        <div>
            <Nav />
            <Intro />
            <Skills />
            <Work />
            <Contact/>
        </div>
    )
}