import styles from './all.module.css';

export function Intro() {


    return (
        <div className={styles.intro}>
            <span>{"<html>"}</span>
            <span>{"<body>"}</span>
            <span>{"</h1>"}</span>
            <h1>
                hi,<br />
                I'm Vamsi Gudivada,<br />
                Full stack web developer
            </h1>
            <span>{"</h1>"}</span>
            <span>{"<p>"}</span>
            <h4>MERN stack developer</h4>
            <span>{"</p>"}</span>
        </div>
    )
}