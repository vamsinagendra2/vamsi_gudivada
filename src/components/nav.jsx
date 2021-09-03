
// const scrolling = () => {
//     window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//     });
//     console.log("hai");
// }

import styles from './all.module.css';
export function Nav() {

    return (
        <div>
            <div className={styles.nav}>
                <div>
                    <h1>VG</h1>
                    <h1>vamsi</h1>
                    <p>web developer</p>
                </div>
                <div className={styles.headings}>
                    <div><p>About</p></div>
                    <div><p>My skills</p></div>
                    <div><p>Work</p></div>
                    <div><p>contact</p></div>
                </div>
            </div>
        </div>
    )
}