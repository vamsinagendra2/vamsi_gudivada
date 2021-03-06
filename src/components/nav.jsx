
// const scrolling = () => {
//     window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//     });
//     console.log("hai");
// }

import { NavLink } from 'react-router-dom';
import styles from './all.module.css';
import { AiFillGithub } from 'react-icons/ai';
import {AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

export function Nav() {

    return (
        <div>
            <div className={styles.nav}>
                <div>
                    <h1>VG</h1>
                    <h1>vamsi</h1>
                    <p>{`<web developer/>`}</p>
                </div>
                <div className={styles.headings}>
                    <NavLink to='/' style={{textDecoration:"none"}}><div><p>{`<About/>`}</p></div></NavLink>
                    <NavLink to='/skills'style={{textDecoration:"none"}}><div><p>{`<Skills/>`}</p></div></NavLink>
                    <NavLink to='/work' style={{textDecoration:"none"}}><div><p>{`<Work/>`}</p></div></NavLink>
                    <NavLink to='/contact' style={{textDecoration:"none"}}><div><p>{`<Connect/>`}</p></div></NavLink>
                </div>
                <div className={styles.icons}>
                    <a href="https://github.com/vamsinagendra2" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/vamsigudivada/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                    <a href="mailto:vamsinagendra2@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail/></a>
                </div>
                
            </div>
        </div>
    )
}