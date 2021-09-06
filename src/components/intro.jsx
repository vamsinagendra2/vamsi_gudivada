import styles from './all.module.css';

// import i from '../video/i.mp4'

export function Intro() {


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
                Full stack web developer
            </h1>
            <span>{"</h1>"}</span>
            <span>{"<p>"}</span>
            <p>Had a passion in the web development</p>
            <span>{"</p>"}</span>
        </div>
    )
}