import { useState } from 'react';
import styles from './all.module.css';

// import i from '../video/i2.mp4'

export function Intro() {
    const [name, setName] = useState(false);


    return (
        <div className={styles.intro}>
            {/* <video autoPlay loop muted className={styles.video}>
                <source src={i} type='video/mp4'/>
            </video> */}
            <span>{"<html>"}</span>
            <span>{"<body>"}</span>
            <span>{"</h1>"}</span>
            <h1>
                Hai,<br />
                I'm Vamsi Gudivada,<br />
            </h1>
            <h1>Full stack web developer</h1>
            <span>{"</h1>"}</span>
            <span>{"<p>"}</span>
            <p>"A web developer focused on crafting for a great web experiences.<br/>
                i am curious and love to be creative which keeps my work out of routine.<br/>
                Designing and Coding have been my passion since the days I started playing with computers.<br/>
                I really enjoy creating perfect designs and functional websites...."</p>
            <span>{"</p>"}</span>
        </div>
    )
}