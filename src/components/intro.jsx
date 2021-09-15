import { useState } from 'react';
import styles from './all.module.css';
import v from '../video/v.jpg'
import { NavLink } from 'react-router-dom';

export function Intro() {
   // const [name, setName] = useState(false);


    return (
        <div className={styles.intro}>
            <span>{"<html>"}</span>
            <span>{"<body>"}</span>
            <span>{"</h1>"}</span>
            <h1>
                Hi,<br />
                I'm Vamsi Gudivada,<br />
            </h1>
            <h1>Full stack web developer</h1>
            <span>{"</h1>"}</span>
            <span>{"<p>"}</span>
            <p>“A developer who is focused on crafting websites to provide a great experience”.<br/>
                I am curious and love to be creative which keeps my work out of routine.<br/>
                Designing and Coding have been my passion since the day I started to play with computers and<br/>
                I enjoy creating perfect designs and functional websites.<br />
                {/* "I say it because I mean it" */}
                 </p>
            <span>{"</p>"}</span>
            <NavLink to='/contact' style={{textDecoration:"none"}}><div className={styles.button}><p>contact me</p></div></NavLink>
            <div className={styles.profileimg}><img src={v} alt="" /></div>
        </div>
    )
}